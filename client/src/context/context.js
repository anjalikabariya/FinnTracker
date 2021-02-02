import React, { useReducer, createContext, useEffect, useState } from 'react';
import contextReducer from './contextReducer';
import firebase from '../firebase'

//create initial state array of documents from firestore
const useItems = () => {
  const [items, setItems] = useState([]) 
  useEffect(() => {
    firebase
      .firestore() 
      .collection("transactions") 
      .onSnapshot(snapshot => {
        const listItems = JSON.stringify(snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })))
        setItems(listItems)
      })
  }, [])
  return items
};

// function to calculate total balance on tracker page
const useBalance = () => {
  //initialize hook to modify balance
  const [bal, setBal] = useState([]) 
  let total = 0;
  //define actions to be taken based on type of transaction
  useEffect(() => {
    //query to select transactions from firestore documents with type "Purchase"
    var purchaseQuery = firebase.firestore().collection("transactions").where('type','==','Purchase')
    purchaseQuery.get().then(
        function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            total -= doc.data().amount
            setBal(total)
          });
        });
    //query to select transactions from firestore documents with type "Sale
    var saleQuery = firebase.firestore().collection("transactions").where('type','==','Sale')
    saleQuery.get().then(
            function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                console.log(doc.data().amount)
                total += doc.data().amount
                setBal(total)
              });
            });
  }, [])
  return bal
}


//create context with initial state
export const TrackerContext = createContext(()=>useItems());

//use context to call reducers into functions
export const Provider = ({ children }) => {
const initialState = useItems();

//change will be reflected after reducer function is called
const [transactions, dispatch] = useReducer(contextReducer, initialState);

//Action Creators
//accepts id parameter passed in payload to delete transaction
const deleteTransaction = (transaction) => {
  dispatch({ type: 'DELETE_TRANSACTION', payload: transaction });
};

//accepts entire transaction in payload with request, to be added to transactions
const addTransaction = (transaction) => {
  dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
};

//calculates balance of portfolio
const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Purchase' ? acc - currVal.amount : acc + currVal.amount),useBalance());

return (
  <TrackerContext.Provider value={{
    //pass functions or values to entire state 
    transactions,
    balance,
    deleteTransaction,
    addTransaction
  }}
  >
    {children}
  </TrackerContext.Provider>
  );
};