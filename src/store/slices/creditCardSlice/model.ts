export type Transaction = {
    iconName: string;
    transactionName: string;
    transactionHour: string;
    cash: number;
    date: string;
}

export type CreditCard = {
    cardHolderName: string;
    bank: string;
    cvc: string;
    cardNumber: string;
    status: boolean;
    valid: string;
    balance: number;
    transactions: Transaction[]
}