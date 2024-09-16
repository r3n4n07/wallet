import { ScrollView } from "react-native";
import { useAppSelector } from "../../../store/hooks/useAppSelector";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Transaction } from "../../../store/slices/creditCardSlice/model";
import type { ChartData, HandleDisplayChartPoint, MonthBalances, Months, ReportViewModel, } from "./model";

const useReportViewModel = (): ReportViewModel => {
    const chartScroll = useRef<ScrollView>();
    const currentMonth = new Date().getMonth() + 1;
    const { transactions, balance } = useAppSelector(state => state.creditCard);
    const [maxDomainY, setMaxDomainY] = useState<number>(0);
    const [chartData, setChartData] = useState<ChartData[]>([{ x: "", y: 0 }]);
    const [isDisplayingFlyouts, setIsDisplayingFlyouts] = useState<boolean>(false);
    const [months, setMonths] = useState<Months[]>([
        {
            numberMonth: 1,
            month: "Jan",
            isSelected: "unchecked"
        },
        {
            numberMonth: 2,
            month: "Fev",
            isSelected: "unchecked"
        },
        {
            numberMonth: 3,
            month: "Mar",
            isSelected: "unchecked"
        },
        {
            numberMonth: 4,
            month: "Abr",
            isSelected: "unchecked"
        },
        {
            numberMonth: 5,
            month: "Mai",
            isSelected: "unchecked"
        },
        {
            numberMonth: 6,
            month: "Jun",
            isSelected: "unchecked"
        },
        {
            numberMonth: 7,
            month: "Jul",
            isSelected: "unchecked"
        },
        {
            numberMonth: 8,
            month: "Ago",
            isSelected: "unchecked"
        },
        {
            numberMonth: 9,
            month: "Set",
            isSelected: "unchecked"
        },
        {
            numberMonth: 10,
            month: "Out",
            isSelected: "unchecked"
        },
        {
            numberMonth: 11,
            month: "Nov",
            isSelected: "unchecked"
        },
        {
            numberMonth: 12,
            month: "Dez",
            isSelected: "unchecked"
        },
    ]);


    const fetchDataChart = (): void => {

        const monthlyBalances = transactions.reduce((balances: MonthBalances, currentValue) => {
            const transactionMonth = new Date(currentValue.date).getMonth() + 1;

            const monthKey = months.find((month) => month.numberMonth === transactionMonth);

            if (monthKey?.month) balances[monthKey.month] += currentValue.cash;

            return balances;
        }, { Jan: 0, Fev: 0, Mar: 0, Abr: 0, Mai: 0, Jun: 0, Jul: 0, Ago: 0, Set: 0, Out: 0, Nov: 0, Dez: 0 })


        const resultSumMonths: ChartData[] = Object
            .entries(monthlyBalances)
            .map(([month, cash]) => ({ x: month, y: parseFloat((cash as number).toFixed(2)) }))
            .slice(0, currentMonth);


        getMaxYValue(resultSumMonths);
        setChartData(resultSumMonths);
    };


    const getMaxYValue = (chartData: ChartData[]): void => {
        const maxYAxisValue = Math.max(...chartData.map(item => item.y)) + 1000; // Increased the y-axis maxDomain by 500 to prevent the graph from being cut off at the top
        setMaxDomainY(maxYAxisValue);
    };


    const updateDataFilter = useCallback(() => {
        let currentMonthCheckbox = [...months.slice(0, currentMonth)];
        currentMonthCheckbox[currentMonthCheckbox.length - 1].isSelected = "checked";
        setMonths(currentMonthCheckbox);
    }, [chartData]);


    const toggleCheck = (index: number) => {
        let data = [...months];
        data[index].isSelected = data[index].isSelected !== "checked" ? "checked" : "unchecked";

        // If any checkbox is unchecked, don't display flyouts
        if (months.find(item => item.isSelected === "unchecked")) setIsDisplayingFlyouts(false);

        // If all checkboxes are checked, display flyouts
        if (months.filter(item => item.isSelected === "unchecked").length === 0) setIsDisplayingFlyouts(true);

        setMonths(data);
    };


    const handleDisplayChartPoint = (month: any): HandleDisplayChartPoint => {
        const chartPoint = months.find((item) => item.month === month.x);

        return chartPoint?.isSelected === "checked" ? "checked" : "unchecked";
    };


    const displayAllMonths = (): void => {
        const checkeBoxesMonths: Months[] = months.map((item) => ({
            numberMonth: item.numberMonth,
            month: item.month,
            isSelected: isDisplayingFlyouts ? "unchecked" : "checked"
        }));

        setMonths(checkeBoxesMonths);
        setIsDisplayingFlyouts(!isDisplayingFlyouts);
    };


    const putLastTransactionsOnTopList = useMemo((): Transaction[] => {
        return [...transactions].reverse();
    }, [transactions]);
    

    useEffect(() => {
        // Primeiro setTimeout para as funções fetchDataChart e updateDataFilter
        const timeoutId = setTimeout(() => {
            fetchDataChart();
            updateDataFilter();

            // Segundo setTimeout apenas para o scrollToEnd
            const scrollTimeoutId = setTimeout(() => {
                chartScroll.current?.scrollToEnd({ animated: true });
            }, 500); // Tempo que deseja aguardar antes de scrollar para o fim

            // Cleanup do segundo timeout (scroll)
            return () => clearTimeout(scrollTimeoutId);
        }, 2000);

        // Cleanup do primeiro timeout (fetch e update)
        return () => clearTimeout(timeoutId);
    }, []);


    return {
        chartScroll,
        maxDomainY,
        chartData,
        isDisplayingFlyouts,
        months,
        balance,
        toggleCheck,
        handleDisplayChartPoint,
        displayAllMonths,
        putLastTransactionsOnTopList
    };
};



export default useReportViewModel;