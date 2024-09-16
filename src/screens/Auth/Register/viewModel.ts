import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterViewModel } from "./model";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { registerSchema } from "../../../schemas/registerSchema";
import type { RegisterFormData } from "../../../schemas/registerSchema";

const useRegisterViewModel = (): RegisterViewModel => {
    const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        mode: "onBlur"
    });
    const navigation = useNavigation()
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);


    const handleRegister = () => { 
        console.log("Registering Account...")
    }


    const handleGoBack = (): void => {
        navigation.goBack();
    }


    return {
        control,
        errors,
        username,
        password,
        email,
        isLoading,
        secureTextEntry,
        setUsername,
        setPassword,
        setEmail,
        setSecureTextEntry,
        handleSubmit,
        handleGoBack,
        handleRegister,

    }
};


export default useRegisterViewModel;