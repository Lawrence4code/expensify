import React from 'react';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  // this part is important, we can pass dispatch along with other information from redux, so no needs of mapStateToProps or props
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3> Description: {description} </h3>
      </Link>

      <p>
        Amount: ${amount} - created on: {createdAt}
      </p>
    </div>
  );
};

export default ExpenseListItem;
