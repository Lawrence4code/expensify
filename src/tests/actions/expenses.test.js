import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

// Remove Expense test
test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

// Edit Expense test

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'new note value' });

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: { note: 'new note value' }
  });
});

// Add Expense test // case one: with data

test('should setup add expense object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to the databate and store', done => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(snapshot => {
      const action = store.getActions();
      expect(action[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return database.ref(`expenses/${action[0].expense.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add expense with default to the databate and store', done => {
  const store = createMockStore({});

  store
    .dispatch(startAddExpense({}))
    .then(snapshot => {
      const action = store.getActions();
      expect(action[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          description: '',
          note: '',
          amount: 0,
          createdAt: 0
        }
      });
      return database.ref(`expenses/${action[0].expense.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual({
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
      });
      done();
    });
});

// Add Expense test // case one: without data

// test('should setup add expense object with default values', () => {
//   const action = addExpense({});
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0,
//       id: expect.any(String)
//     }
//   });
// });
