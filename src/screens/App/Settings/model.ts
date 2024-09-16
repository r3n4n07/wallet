import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SettingsStackParamList } from "../../../routes/type";

export type SettingsViewModel = {
    handleNavigation: (route: keyof SettingsStackParamList) => void;
    logOut: ()=> void
};

export type SettingsScreenProp = NativeStackNavigationProp<SettingsStackParamList>;