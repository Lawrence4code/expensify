import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

// Date
const now = moment();

class ExpenseForm extends Component {
  constructor(props) {
    super();
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calenderFocused: false,
      error: ''
    };
  }

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
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => {
        return {
          amount
        };
      });
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => {
        return {
          createdAt
        };
      });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => {
      return {
        calendarFocused: focused
      };
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => {
        return {
          error: 'Please submit with valid inputs.'
        };
      });
    } else {
      this.setState(() => {
        return {
          error: ''
        };
      });
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
      console.log('onSubmit triggered.');
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p> {this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
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
