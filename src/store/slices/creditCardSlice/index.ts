import { addCreditCardThunk } from "./thunk";
import { createSlice } from "@reduxjs/toolkit";
import { creditCardInitialState } from "./initialState";

export const creditCardSlice = createSlice({
    name: "CreditCard",
    initialState: creditCardInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addCreditCardThunk.fulfilled, (state, action) => {
                const { cardHolderName, cardNumber, cvc, valid } = action.payload;

                state.cardHolderName = cardHolderName;
                state.bank = "RealBank";
                state.cvc = cvc;
                state.cardNumber = cardNumber;
                state.status = true;
                state.valid = valid;
                state.balance = Math.floor(Math.random() * 1000);
            })
    }
});


export default creditCardSlice.reducer;
