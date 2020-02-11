import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import About from './About';

test('About component renders', () => {
  const component: ShallowWrapper = shallow(<About />);
  expect(component).toMatchSnapshot();
});
