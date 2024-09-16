import { Login } from "../screens/Auth/Login";
import { Register } from "../screens/Auth/Register";
import { PasswordRecovery } from "../screens/Auth/PasswordRecovery";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./type";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AuthRoutes() {
    return (
        <Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown:false
            }}>
            <Screen name="Login" component={Login} />
            <Screen name="Register" component={Register} />
            <Screen name="PasswordRecovery" component={PasswordRecovery} />
        </Navigator>
    );
}