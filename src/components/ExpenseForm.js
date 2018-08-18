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
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error"> {this.state.error}</p>}
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
          className="text_input"
        />
        <input
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
          className="text_input"
        />

        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          id="single_date_picker"
        />

        <textarea
          className="textarea"
          placeholder="Add a note for your expense"
          value={this.state.note}
          onChange={this.onNodeChange}
        />
        <div>
          <button className="button"> Add Expense </button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
