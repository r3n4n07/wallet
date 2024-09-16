import type { DetailsCreditCard } from "./model";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../../../../store/hooks/useAppSelector";

const useDetailsCreditCardViewModel = (): DetailsCreditCard => {
    const { bank, cardHolderName, cardNumber, status, valid } = useAppSelector(state => state.creditCard);
    const navigation = useNavigation();


    const handleGoBack = () => {
        navigation.goBack();
    };

    
    return {
        bank,
        cardHolderName,
        cardNumber,
        status,
        valid,
        handleGoBack
    };
};


export default useDetailsCreditCardViewModel;