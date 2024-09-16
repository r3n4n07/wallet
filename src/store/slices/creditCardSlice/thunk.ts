import { CreditCard } from "./model";
import { createAsyncThunk } from "@reduxjs/toolkit";

type AddCreditCardThunk = Pick<CreditCard, "cardHolderName" | "cardNumber" | "cvc" | "valid">;

export const addCreditCardThunk = createAsyncThunk(
    "Add/CreditCard",
    async (
      { cardHolderName, cardNumber, cvc, valid }: AddCreditCardThunk, { rejectWithValue }
    ) => {
      try {
        const response = await new Promise((resolver, rejecter) => {
          setTimeout(() => {
            // Simulate success or failure
            const isSuccess = Math.random() > 0.10; 
  
            if (isSuccess) {
              resolver({ cardHolderName, cardNumber, cvc, valid });
            } else {
              rejecter(new Error("Falha ao adicionar cartão de crédito"));
            }
          }, 2000);
        });
  
        return response as AddCreditCardThunk;
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }
  );