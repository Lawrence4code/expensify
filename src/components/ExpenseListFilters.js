import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = props => {
  console.log(props);
  return (
    <div>
      <input
        type="text"
        value={props.filters.text}
        onChange={e => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      />
      <select
        value={props.filters.sortBy}
        onChange={e => {
          if (e.target.value === 'date') {
            console.log(e.target.value);
            props.dispatch(sortByDate());
          } else if (e.target.value === 'amount') {
            props.dispatch(sortByAmount());
            console.log(e.target.value);
          }
        }}
      >
        <option value="date"> Data </option>
        <option value="amount"> Amount </option>
      </select>
    </div>
  );
};

const mapStatToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStatToProps)(ExpenseListFilters);
