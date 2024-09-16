import { useState } from "react"
import { Alert } from "react-native";
import { useForm } from "react-hook-form";
import { CardDataEntryViewModel } from "./model";
import { zodResolver } from "@hookform/resolvers/zod";
import type { CardDataEntryScreenProp } from "./model";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../../../../../store/hooks/useAppDispatch";
import { addCreditCardThunk } from "../../../../../store/slices/creditCardSlice/thunk";
import { CardDataEntryFormData, cardDataEntrySchema } from "../../../../../schemas/cardDataEntrySchema";

const useCardDataEntryViewModel = (): CardDataEntryViewModel => {
    const { control, handleSubmit, formState: { errors } } = useForm<CardDataEntryFormData>({
        resolver: zodResolver(cardDataEntrySchema),
        mode: "onBlur"
    });
    const navigation = useNavigation<CardDataEntryScreenProp>();
    const dispatch = useAppDispatch();
    const [cardHolderName, setCardHolderName] = useState<string>('');
    const [cvc, setCvc] = useState<string>('');
    const [cardNumber, setCardNumber] = useState<string>('');
    const [valid, setValid] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const handleCardRegister = async () => {
        try {
            setIsLoading(true);
            await dispatch(addCreditCardThunk({ cardNumber: cardNumber, cvc: cvc, cardHolderName: cardHolderName, valid: valid })).unwrap();
            navigation.replace("TabRoutes");
        } catch (error: any) {
            Alert.alert("Atenção", error, [{ text: "Ok" }])
        } finally {
            setIsLoading(false);
        }
    }


    return {
        cardHolderName,
        cvc,
        cardNumber,
        valid,
        isLoading,
        control,
        errors,
        setCardHolderName,
        setCvc,
        setCardNumber,
        setValid,
        handleSubmit,
        handleCardRegister,
    };
};


export default useCardDataEntryViewModel