import { AddCreditCardStackParamList } from "../../../routes/type";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AddCardViewModel = {
    handleNavigation: (route: keyof AddCreditCardStackParamList) => void
};

export type AddCardScreenProp = NativeStackNavigationProp<AddCreditCardStackParamList>;