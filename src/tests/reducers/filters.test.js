import filtersReducers from '../../reducers/filters';
import moment from 'moment';

// test case for default filter
test('should setup default filter values', () => {
  const state = filtersReducers(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

// test case for default by amount
test('should set filter to sort by amount', () => {
  const state = filtersReducers(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toEqual('amount');
});

// test case for default by date
test('should set filter to sort by date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducers(currentState, action);
  expect(state.sortBy).toEqual('date');
});

// test case for default by text

test('should set text filter', () => {
  const text = 'This is my filter.';
  const action = { type: 'SET_TEXT_FILTER', text };
  const state = filtersReducers(undefined, action);
  expect(state.text).toEqual(text);
});

// test case for start date filter

test('should set start date filter', () => {
  const startDate = moment();
  const action = { type: 'SET_START_DATE', startDate };
  const state = filtersReducers(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test('should set start end filter', () => {
  const endDate = moment();
  const action = { type: 'SET_END_DATE', endDate };
  const state = filtersReducers(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
