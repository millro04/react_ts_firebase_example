import React from 'react';
import About from './About';
import { shallow, ShallowWrapper, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


test('About component renders', () => {
  const component: ShallowWrapper = shallow(<About />);
  expect(component).toMatchSnapshot();
});
