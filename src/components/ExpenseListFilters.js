import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = props => {
  return (
    <div>
      <input
        type="text"
        value={props.filters.text}
        onChange={e => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      />
      <select>
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
