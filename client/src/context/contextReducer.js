//created reducers for action types
//defines actions to be performed
import firebase from '../firebase';


const contextReducer = (state, action) => {
    let transactions

//   perform functions based on action types
    switch (action.type) {

      case 'DELETE_TRANSACTION':
        //remove id specified in payload
        transactions = [...state];
        transactions = state.filter((transaction) => transaction.id !== action.payload);
        var jobskill_query = firebase.firestore().collection("transactions").where('id','==', action.payload);
        jobskill_query.get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            doc.ref.delete();
          });
        });
        return transactions;

      case 'ADD_TRANSACTION':
        //add transaction using data accepted from payload, into existing transactions 
        transactions = [action.payload, ...state];
        firebase
          .firestore()
          .collection("transactions")
          .add(action.payload)
        return transactions;
    
        //if no actions matched, return existing state
      default:
        return state;
    }
  };
  
  export default contextReducer;