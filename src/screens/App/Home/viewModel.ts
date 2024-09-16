import { useMemo } from "react";
import { HomeViewModel } from "./model";
import type { HomeScreenProp } from "./model";
import { useNavigation } from "@react-navigation/native";
import type { HomeStackParamList } from "../../../routes/type";
import { useAppSelector } from "../../../store/hooks/useAppSelector";
import type { Transaction } from "../../../store/slices/creditCardSlice/model";

const useHomeViewModel = (): HomeViewModel => {
    const navigation = useNavigation<HomeScreenProp>();
    const { balance, bank, transactions } = useAppSelector(state => state.creditCard);
    const { photo } = useAppSelector(state => state.user);


    const handleNavigation = (route: keyof HomeStackParamList): void => {
        navigation.navigate(route);
    };

    const putLastTransactionsOnTopList = useMemo((): Transaction[] => {
        return [...transactions].reverse();
    }, [transactions]);

    return {
        balance,
        bank,
        photo,
        handleNavigation,
        putLastTransactionsOnTopList
    };
};


export default useHomeViewModel;