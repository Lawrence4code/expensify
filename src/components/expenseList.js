import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpense from '../selectors/expenses';

export const ExpenseList = props => {
  return (
    <div>
      <h1> Expense List </h1>
      {props.expenses.length === 0 ? (
        <p> No expenses posted yet.</p>
      ) : (
        props.expenses.map(expense => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })
      )}
    </div>
  );
};

const mapStateToProps = state => {
  // ConnectedExpenseList
  return { expenses: selectExpense(state.expenses, state.filters) };
};

export default connect(mapStateToProps)(ExpenseList);

// export default ConnectedExpenseList;
