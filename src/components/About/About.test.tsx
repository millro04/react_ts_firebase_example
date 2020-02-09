import React from 'react';
import About from './About';
import { shallow, ShallowWrapper } from 'enzyme';


test('About component renders', () => {
  const component: ShallowWrapper = shallow(<About />);
  expect(component).toMatchSnapshot();
});
