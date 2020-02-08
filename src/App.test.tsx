import React from 'react';
import App from './App';
import Header from './components/Header/Header';
import { shallow, ShallowWrapper, configure, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
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

test('Renders the DataEntry tab initially', () => {
  const wrapper = mount(
    <Router><App /></Router>
  );
  expect(location.pathname).toEqual('/dataentry');
});


test('Renders the Dashboard when we click on the tab', () => {
  const wrapper = mount(
    <Router><App /></Router>
  );
  expect(location.pathname).toEqual('/dataentry');

  const link = wrapper.find({ className: 'nav-tab' }).at(1);
  link.simulate('click', { button: 0 });

  expect(location.pathname).toEqual('/dashboard')
});
