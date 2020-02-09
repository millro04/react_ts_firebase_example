import React from 'react';
import Header from './Header';
import { shallow, ShallowWrapper } from 'enzyme';


test('Header component renders', () => {
  const component: ShallowWrapper = shallow(<Header />);
  expect(component).toMatchSnapshot();
});
