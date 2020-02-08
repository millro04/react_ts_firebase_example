import React from 'react';
import Dashboard from './Dashboard';
import DashboardView from './DashboardView';
import { shallow, ShallowWrapper, configure, ReactWrapper, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import firebase from '../../services/Firebase/Firebase';
import { firestore } from '../../services/Firebase/__mocks__/Firebase';
firebase.firestore = firestore;

test('Dashboard component renders', () => {
    const component: ShallowWrapper = shallow(<Dashboard />);
    expect(component).toMatchSnapshot();
});

test('DashboardView component renders', () => {
    const component: ShallowWrapper = shallow(<DashboardView ListGraphData={[]} />);
    expect(component).toMatchSnapshot();
});

