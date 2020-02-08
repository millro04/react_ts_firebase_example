import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import Header from './components/Header/Header';
import { shallow, ShallowWrapper, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


test('App component renders', () => {
  const component: ShallowWrapper = shallow(<App />);
  expect(component).toMatchSnapshot();
});


test('App Component renders Header Component', () => {
  const app: ShallowWrapper = shallow(<App />);
  expect(app.find(Header).length).toBeTruthy();
});
