import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
  const expenseData = {
    description: 'rent',
    amount: 109500,
    note: 'rent note',
    createdAt: 1000
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

// Add Expense test // case one: without data

test('should setup add expense object with default values', () => {
  const action = addExpense({});
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
