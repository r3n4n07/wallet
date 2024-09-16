import userSlice from "./slices/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import creditCardSlice from "./slices/creditCardSlice";

const store = configureStore({
    reducer: {
        creditCard: creditCardSlice,
        user:userSlice
    }
});


export default store;