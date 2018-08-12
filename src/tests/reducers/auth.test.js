import authReducers from '../../reducers/auth';

test('should set id for login', () => {
  const action = {
    type: 'LOGIN',
    uid: '12345'
  };
  const state = authReducers({}, action);
  expect(state.uid).toEqual(action.uid);
});

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducers({ uid: 'anything' }, action);
  expect(state).toEqual({});
});
