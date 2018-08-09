import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  // this part is important, we can pass dispatch along with other information from redux, so no needs of mapStateToProps or props
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3> Description: {description} </h3>
      </Link>

      <p>
        {numeral(amount / 100).format('$0,0.00')}
        -
        {moment(createdAt).format('MMM Do YYYY')}
      </p>
    </div>
  );
};

export default ExpenseListItem;
