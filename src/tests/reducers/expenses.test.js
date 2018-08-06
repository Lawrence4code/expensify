import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import uuid from 'uuid';

// test case for default expense
test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

// test case for remove expense with id
test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

// test case for remove expense without id
test('should not remove expense without id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 4
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// test case for adding an expense

test('should add an expenses to expenses', () => {
  const expense = {
    id: 4,
    description: 'Some expense',
    note: 'some expenses note',
    amount: 1000,
    createdAt: 1000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

// test case for editing an expense

test('should edit an expense', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: { amount }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toEqual(122000);
});

// test case for editing an expense restriction

test('should not edit an expense without id ', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: { amount }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
