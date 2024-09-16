import { WEB_CLIENT_ID } from '@env';
import { Alert } from "react-native";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import type { LoginViewModel } from "./model";
import type { LoginScreenProp } from "./model";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../../schemas/userSchema";
import { useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "../../../routes/type";
import { UserFormData } from "../../../schemas/userSchema";
import { loginThunk } from "../../../store/slices/userSlice/thunk";
import { useAppDispatch } from "../../../store/hooks/useAppDispatch";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const useLoginViewModel = (): LoginViewModel => {
    const { control, handleSubmit, formState: { errors } } = useForm<UserFormData>({
        resolver: zodResolver(userSchema),
        mode: "onBlur"
    });
    const dispatch = useAppDispatch();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigation = useNavigation<LoginScreenProp>();


    const handleNavigate = (route: keyof AuthStackParamList): void => {
        navigation.navigate(route);
    };


    const loginGoogle = async () => {
        try {
            await dispatch(loginThunk()).unwrap();
        } catch (error: any) {
            Alert.alert("Atenção", error, [{ text: "Ok" }])
        }
    };


    const login = () => {
        Alert.alert("Click on the Google Button to log in")
    }


    useEffect(() => {
        GoogleSignin.configure({
            webClientId: WEB_CLIENT_ID,
        });
    }, []);


    return {
        username,
        password,
        secureTextEntry,
        setUsername,
        setPassword,
        setSecureTextEntry,
        isLoading,
        control,
        errors,
        handleSubmit,
        handleNavigate,
        loginGoogle,
        login
    }
};

export default useLoginViewModel;



