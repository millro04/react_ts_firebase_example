import React from 'react';
import renderer from 'react-test-renderer';
import DataEntry from './DataEntry';
import DataEntryView from './DataEntryView';
import { shallow, ShallowWrapper, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


test('Data Entry component renders', () => {
    const component: ShallowWrapper = shallow(<DataEntry />);
    expect(component).toMatchSnapshot();
});


test('Data Entry Component renders its View Component', () => {
  const component: ShallowWrapper = shallow(<DataEntry />);
  expect(component.find(DataEntryView).length).toBeTruthy();
});


test('Data Entry View renders', () => {
    const mockColumns = [
        {
            title: 'Mock Title',
            field: 'mock_field_value'
        }
    ];
    const component: ShallowWrapper = shallow(<DataEntryView columns={mockColumns} />);
    expect(component).toMatchSnapshot();
  });