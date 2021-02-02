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

  const balance = transactions.reduce((acc, currVal) => (currVal.type === 'purchase' ? acc - currVal.amount : acc + currVal.amount), 0);

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