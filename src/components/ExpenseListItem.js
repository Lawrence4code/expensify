import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
  // this part is important, we can pass dispatch along with other information from redux, so no needs of mapStateToProps or props
  return (
    <div>
      <h3> Description: {description} </h3>
      <p>
        Amount: ${amount} - created on: {createdAt}
      </p>
      <button
        onClick={e => {
          dispatch(removeExpense({ id }));
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default connect()(ExpenseListItem);