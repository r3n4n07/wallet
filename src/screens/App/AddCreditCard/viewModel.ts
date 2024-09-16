import { AddCardViewModel } from "./model";
import type { AddCardScreenProp } from "./model";
import { useNavigation } from "@react-navigation/native";
import type { AddCreditCardStackParamList } from "../../../routes/type";

const useAddCardViewModel = (): AddCardViewModel => {
    const navigation = useNavigation<AddCardScreenProp>();


    const handleNavigation = (route: keyof AddCreditCardStackParamList): void => {
        navigation.navigate(route);
    };

    return {
        handleNavigation
    };
};


export default useAddCardViewModel;