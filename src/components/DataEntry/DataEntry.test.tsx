import React from 'react';
import DataEntry from './DataEntry';
import DataEntryView from './DataEntryView';
import { shallow, ShallowWrapper, configure, ReactWrapper, mount } from 'enzyme';
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
    const onAdd = jest.fn();
    const onUpdate = jest.fn();
    const onDelete = jest.fn();

    const tableData = [
        {
            mock_field_value: 0
        }
    ]

    const mockColumns = [
        {
            title: 'Mock Title',
            field: 'mock_field_value'
        }
    ];
    const component: ShallowWrapper = shallow(
        <DataEntryView
            columns={mockColumns}
            tableData={tableData}
            onRowAdd={onAdd}
            onRowUpdate={onUpdate}
            onRowDelete={onDelete}
        />
    );
    expect(component).toMatchSnapshot();
  });

test('DataEntryView snapshot test', () => {
    const onAdd = jest.fn();
    const onUpdate = jest.fn();
    const onDelete = jest.fn();

    const tableData = [
        {
            mock_field_value: 0
        },
        {
            mock_field_value: 1
        },
        {
            mock_field_value: 2
        }
    ]

    const mockColumns = [
        {
            title: 'Mock Title',
            field: 'mock_field_value'
        }
    ];
    const component: ShallowWrapper = shallow(
        <DataEntryView
            columns={mockColumns}
            tableData={tableData}
            onRowAdd={onAdd}
            onRowUpdate={onUpdate}
            onRowDelete={onDelete}
        />
    );
    expect(component).toMatchSnapshot();
});
