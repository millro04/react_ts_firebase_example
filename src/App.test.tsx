import React from 'react';
import { shallow, ShallowWrapper, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Header from './components/Header/Header';

test('App component renders', () => {
  const component: ShallowWrapper = shallow(<App />);
  expect(component).toMatchSnapshot();
});

test('App Component renders Header Component', () => {
  const app: ShallowWrapper = shallow(<App />);
  expect(app.find(Header).length).toBeTruthy();
});

test('Renders the DataEntry tab initially', () => {
  mount(
    <Router>
      <App />
    </Router>,
  );
  expect(window.location.pathname).toEqual('/dataentry');
});

test('Renders the Dashboard when we click on the tab', () => {
  const wrapper = mount(
    <Router>
      <App />
    </Router>,
  );

  const indexOfDashboardButton = 1;
  const link = wrapper.find({ className: 'nav-tab' }).at(indexOfDashboardButton);
  link.simulate('click', { button: 0 });

  expect(window.location.pathname).toEqual('/dashboard');
});

test('Renders the About page when we click on the tab', () => {
  const wrapper = mount(
    <Router>
      <App />
    </Router>,
  );

  const indexOfAboutButton = 4;

  const link = wrapper.find({ className: 'nav-tab' }).at(indexOfAboutButton);
  link.simulate('click', { button: 0 });

  expect(window.location.pathname).toEqual('/about');
});
