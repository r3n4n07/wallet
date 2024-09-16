import { Alert } from "react-native";
import { SettingsStackParamList } from "../../../routes/type";
import { SettingsScreenProp, SettingsViewModel } from "./model";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../../../store/hooks/useAppDispatch";
import { logOutThunk } from "../../../store/slices/userSlice/thunk";

const useSettingsViewModel = (): SettingsViewModel => {
    const navigation = useNavigation<SettingsScreenProp>();
    const dispatch = useAppDispatch();


    const handleNavigation = (route: keyof SettingsStackParamList): void => {
        navigation.navigate(route);
    };


    const logOut = async () => {
        try {
            await dispatch(logOutThunk()).unwrap();
        } catch (error: any) {
            Alert.alert("Atenção", error, [{ text: "Ok" }])
        }
    };

    
    return {
        handleNavigation,
        logOut
    };
};


export default useSettingsViewModel;