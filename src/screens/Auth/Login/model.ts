import { AuthStackParamList } from "../../../routes/type";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { UserFormData } from "../../../schemas/userSchema";
import { Control, FieldErrors, UseFormHandleSubmit,  } from "react-hook-form";

export type LoginViewModel = {
    control: Control<UserFormData>;
    errors: FieldErrors<UserFormData>;
    username: string;
    password: string;
    isLoading: boolean;
    secureTextEntry: boolean;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    setSecureTextEntry: React.Dispatch<React.SetStateAction<boolean>>;
    handleSubmit: UseFormHandleSubmit<UserFormData>;
    handleNavigate: (route: keyof AuthStackParamList) => void;
    loginGoogle: () => void;
    login: () => void
}


export type LoginScreenProp = NativeStackNavigationProp<AuthStackParamList>;