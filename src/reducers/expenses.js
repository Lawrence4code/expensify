// Expense Reducer
const expensesReducerDefaultState = []; // incase of one to many default value, variable is created.

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  //  separate reducer for expenses
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(exp => {
        return exp.id !== action.id;
      });
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

export default expensesReducer;
