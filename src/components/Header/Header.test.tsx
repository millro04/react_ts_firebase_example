import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Header from './Header';

test('Header component renders', () => {
  const component: ShallowWrapper = shallow(<Header />);
  expect(component).toMatchSnapshot();
});
