import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAppSelector } from "../store/hooks/useAppSelector";

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {

    const { idToken } = useAppSelector(state => state.user);

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            {!idToken
                ?
                <Screen component={AuthRoutes} name={"AuthRoutes"} />
                :
                <Screen component={AppRoutes} name={"AppRoutes"} />
            }
        </Navigator>
    )
} 