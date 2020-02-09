import React from 'react';
import DataEntry from './DataEntry';
import DataEntryView from './DataEntryView';
import { shallow, ShallowWrapper } from 'enzyme';
import firebase from '../../services/Firebase/Firebase';
import { firestore, firebaseAdd, firebaseDelete, firebaseSet } from '../../services/Firebase/__mocks__/Firebase';
firebase.firestore = firestore;

test('Data Entry component renders', () => {
    const component: ShallowWrapper = shallow(<DataEntry />);
    expect(component).toMatchSnapshot();
});

test('Data Entry Component renders its View Component', () => {
  const component: ShallowWrapper = shallow(<DataEntry />);
  expect(component.find(DataEntryView).length).toBeTruthy();
});

test('Data Entry Component calls add on Firebase when onRowAdd is triggered', async () => {
    const component: ShallowWrapper = shallow(<DataEntry />);
    await component.instance().onRowAdd({
        book_name: 'test',
        min_read: 60,
        date: '2020-02-01'
    });
    expect(firebaseAdd).toHaveBeenCalled();
  });

test('Data Entry Component calls delete on Firebase when onRowDelete is triggered', async () => {
    const component: ShallowWrapper = shallow(<DataEntry />);
    await component.instance().onRowDelete({id: 0});
    expect(firebaseDelete).toHaveBeenCalled();
});

test('Data Entry Component calls set on Firebase when onRowUpdate is triggered', async () => {
    const component: ShallowWrapper = shallow(<DataEntry />);
    await component.instance().onRowUpdate(
        {
            book_name: 'test',
            min_read: 60,
            date: '2020-02-01'
        },
        {id: 0});
    expect(firebaseSet).toHaveBeenCalled();
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
            isLoading={false}
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
            isLoading={false}
        />
    );
    expect(component).toMatchSnapshot();
});
