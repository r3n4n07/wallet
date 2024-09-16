import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Control, UseFormHandleSubmit, FieldErrors } from 'react-hook-form';
import type { AddCreditCardStackParamList } from "../../../../../routes/type";
import type { CreditCard } from '../../../../../store/slices/creditCardSlice/model';
import type { CardDataEntryFormData } from '../../../../../schemas/cardDataEntrySchema';

export type CardDataEntryViewModel = Pick<CreditCard, "cardHolderName" | "cvc" | "cardNumber" | "valid"> & {
    isLoading: boolean;
    control: Control<CardDataEntryFormData>;
    errors: FieldErrors<CardDataEntryFormData>;
    setCardHolderName: React.Dispatch<React.SetStateAction<string>>;
    setCvc: React.Dispatch<React.SetStateAction<string>>;
    setCardNumber: React.Dispatch<React.SetStateAction<string>>;
    setValid: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: UseFormHandleSubmit<CardDataEntryFormData>;
    handleCardRegister: () => void
};

export type CardDataEntryScreenProp = NativeStackNavigationProp<AddCreditCardStackParamList>;