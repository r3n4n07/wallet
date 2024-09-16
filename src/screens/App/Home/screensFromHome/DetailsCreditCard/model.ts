import { CreditCard } from "../../../../../store/slices/creditCardSlice/model";

export type DetailsCreditCard = Pick<CreditCard, "cardHolderName" | "bank" | "cardNumber" | "status" | "valid"> & {
    handleGoBack: () => void
};