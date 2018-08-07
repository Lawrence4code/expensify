import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

import { SingleDatePicker } from 'react-dates';

test('should render Expense from correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render an error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });

  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set the description on input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = 'New Description';
  wrapper
    .find('input')
    .at(0)
    .simulate('change', { target: { value } });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = 'New Note';
  wrapper.find('textarea').simulate('change', { target: { value } });
  expect(wrapper.state('note')).toBe(value);
});

test('should set the amount if input is valid', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = '23.50';
  wrapper
    .find('input')
    .at(1)
    .simulate('change', { target: { value } });
  expect(wrapper.state('amount')).toBe(value);
});

test('should not set the amount if input is invalid', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = '12.122';
  wrapper
    .find('input')
    .at(1)
    .simulate('change', { target: { value } });
  expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit props for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  onSubmitSpy('Developer', 'Delhi');
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    amount: 195,
    createdAt: 0,
    description: 'Gum',
    note: ''
  });
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find(SingleDatePicker).prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calender focus on change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });
  wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toEqual(focused);
});
