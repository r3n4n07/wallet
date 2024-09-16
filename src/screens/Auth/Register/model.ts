import React from "react";
import { RegisterFormData } from "../../../schemas/registerSchema";
import { Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form";

export type RegisterViewModel = {
    control: Control<RegisterFormData>;
    errors: FieldErrors<RegisterFormData>;
    username: string;
    password: string;
    email: string;
    isLoading: boolean;
    secureTextEntry: boolean;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setSecureTextEntry: React.Dispatch<React.SetStateAction<boolean>>;
    handleSubmit: UseFormHandleSubmit<RegisterFormData>;
    handleGoBack: () => void;
    handleRegister: () => void;
}