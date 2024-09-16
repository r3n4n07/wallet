import { Transaction } from "../../../store/slices/creditCardSlice/model";

export type ReportViewModel = {
    chartScroll: any;
    maxDomainY: number;
    chartData: ChartData[];
    isDisplayingFlyouts: boolean;
    months: Months[];
    balance: number;
    toggleCheck: (index:number)=> void;
    handleDisplayChartPoint: (month: any) => HandleDisplayChartPoint; // essa função
    displayAllMonths: () => void;
    putLastTransactionsOnTopList: Transaction[];
};

export type ChartData = { x: string, y: number };

export type MonthBalances = { [key: string]: number };

export type Months = { numberMonth: number; month: string; isSelected: 'checked' | 'unchecked' | 'indeterminate' };

export type HandleDisplayChartPoint = Months["isSelected"];