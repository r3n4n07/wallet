import { Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import { PasswordRecoveryFormData } from "../../../schemas/passwordRecoverySchema";

export type PasswordRecoveryViewModel = {
    control: Control<PasswordRecoveryFormData>;
    errors: FieldErrors<PasswordRecoveryFormData>;
    email: string;
    setEmail:React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: UseFormHandleSubmit<PasswordRecoveryFormData>;
    handleGoBack: () => void;
    handlePasswordRecovery: ()=> void;
};