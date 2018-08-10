import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './firebase/firebase';

const store = configureStore();

// addExpense -> water bill
// const expenseOne = store.dispatch(
//   addExpense({
//     description: 'water bill',
//     note: 'February water bill',
//     amount: 4500
//   })
// );

// // addExpense -> gas bill
// const expenseTwo = store.dispatch(
//   addExpense({
//     description: 'gas bill',
//     note: 'February gas bill',
//     createdAt: 1000
//   })
// );

// const expenseThree = store.dispatch(
//   addExpense({
//     description: 'Rent',
//     note: 'February rent',
//     amount: 109500
//   })
// );

// setTextFilter  -> bill -> water

// store.dispatch(setTextFilter('bill'));

// get visibleExpenses -> print value

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// console.log(store.getState());

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
