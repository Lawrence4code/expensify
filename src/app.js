import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

// addExpense -> water bill
const expenseOne = store.dispatch(
  addExpense({
    description: 'water bill',
    note: 'February water bill',
    amount: 1000,
    createdAt: -2000
  })
);

// addExpense -> gas bill
const expenseTwo = store.dispatch(
  addExpense({
    description: 'gas bill',
    note: 'February gas bill',
    amount: 2000,
    createdAt: 3000
  })
);

// setTextFilter  -> bill -> water

store.dispatch(setTextFilter('bill'));

// get visibleExpenses -> print value

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

// console.log(store.getState());

ReactDOM.render(AppRouter, document.getElementById('app'));
