import { HomeStackParamList } from "../../../routes/type";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { Transaction } from "../../../store/slices/creditCardSlice/model";

export type HomeViewModel = {
    balance: number;
    bank:string;
    photo:string | undefined;
    putLastTransactionsOnTopList: Transaction[];
    handleNavigation: (route: keyof HomeStackParamList) => void;
};

export type HomeScreenProp = NativeStackNavigationProp<HomeStackParamList>;