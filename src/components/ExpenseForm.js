import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// Date
const now = moment();
console.log(now.format('MMM do YYYY'));

class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calenderFocused: false
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => {
      return {
        description
      };
    });
  };

  onNodeChange = e => {
    const note = e.target.value;
    this.setState(() => {
      return {
        note
      };
    });
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => {
        return {
          amount
        };
      });
    }
  };

  onDateChange = createdAt => {
    this.setState(() => {
      return {
        createdAt
      };
    });
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => {
      return {
        calenderFocused: focused
      };
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense"
            value={this.state.note}
            onChange={this.onNodeChange}
          />
          <button> Add Expense </button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
