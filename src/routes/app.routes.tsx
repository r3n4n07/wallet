import { TabRoutes } from "./tab.routes";
import { Profile } from "../screens/App/Settings/Profile";
import { AddCreditCard } from "../screens/App/AddCreditCard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CardDataEntry } from "../screens/App/AddCreditCard/screensFromAddCreditCard/CardDataEntry";
import { DetailsCreditCard } from "../screens/App/Home/screensFromHome/DetailsCreditCard";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            initialRouteName="AddCreditCard"
            screenOptions={{
                headerShown: false
            }}>
            <Screen name="AddCreditCard" component={AddCreditCard} />
            <Screen name="CardDataEntry" component={CardDataEntry} />
            <Screen name="TabRoutes" component={TabRoutes} />
            <Screen name="DetailsCreditCard" component={DetailsCreditCard} />
            <Screen name="Profile" component={Profile} />
        </Navigator>
    )
}