import { useState } from "react";
import { useForm } from "react-hook-form";
import { PasswordRecoveryViewModel } from "./model";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { passwordRecoverySchema } from "../../../schemas/passwordRecoverySchema";
import type { PasswordRecoveryFormData } from "../../../schemas/passwordRecoverySchema";

const usePasswordRecoveryViewModel = (): PasswordRecoveryViewModel => {
    const { control, handleSubmit, formState: { errors } } = useForm<PasswordRecoveryFormData>({
        resolver: zodResolver(passwordRecoverySchema),
        mode: "onSubmit"
    });
    const navigation = useNavigation();
    const [email, setEmail] = useState<string>("");


    const handleGoBack = (): void => {
        navigation.goBack();
    }


    const handlePasswordRecovery = ():void => {
        console.log("sending email...");
    };

    return {
        control,
        errors,
        email,
        setEmail,
        handleGoBack,
        handleSubmit,
        handlePasswordRecovery
    };
};

export default usePasswordRecoveryViewModel;