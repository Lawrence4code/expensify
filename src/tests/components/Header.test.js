import React from 'react';
import { shallow } from 'enzyme';

// import shallow from 'react-test-renderer/shallow';
import Header from '../../components/Header';

// test case for rendering shallow rendering

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
