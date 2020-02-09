import { IBookData } from '../types';

export interface IDashboardState {
    bookData: IBookData[]
}

export interface IGraphData {
    data: number[],
    labels: string[],
    title: string
}

export interface IDashboardViewProps {
    ListGraphData: IGraphData[]
}
