import React from 'react';
import Dashboard from './Dashboard';
import DashboardView from './DashboardView';
import { shallow, ShallowWrapper, configure, ReactWrapper, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import firebase from '../../services/Firebase/Firebase';
import { firestore, onSnapshot } from '../../services/Firebase/__mocks__/Firebase';
firebase.firestore = firestore;

test('Dashboard component renders', () => {
    const component: ShallowWrapper = shallow(<Dashboard />);
    expect(component).toMatchSnapshot();
});

test('DashboardView component renders', () => {
    const component: ShallowWrapper = shallow(<DashboardView ListGraphData={[
        {title: 'Graph Title', data: [0, 5, 10], labels: ['2020-01-01', '2020-01-02', '2020-01-03']}
    ]} />);
    expect(component).toMatchSnapshot();
});

test('Dashboard Component calls firebase onSnapshot when component is mounted', async () => {
    const component: ShallowWrapper = shallow(<Dashboard />);
    expect(onSnapshot).toHaveBeenCalled();
});