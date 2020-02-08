import React from 'react';
import Header from './Header';
import { shallow, ShallowWrapper, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


test('Header component renders', () => {
  const component: ShallowWrapper = shallow(<Header />);
  expect(component).toMatchSnapshot();
});
