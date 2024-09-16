import colors from "../styles/colors";
import { Icons } from "../styles/icons";
import { AppTabParamList } from "./type";
import { Icon } from "react-native-paper";
import { Home } from "../screens/App/Home";
import { Report } from "../screens/App/Report";
import { Settings } from "../screens/App/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { responsiveFont, responsiveHeight, responsiveWidth } from "../utils/sizes";

const { Navigator, Screen } = createBottomTabNavigator<AppTabParamList>();

export function TabRoutes() {
    return (
        <Navigator
            initialRouteName={"Home"}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.PINK,
                tabBarInactiveTintColor: colors.WHITE_100,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 15,
                    marginHorizontal: responsiveWidth(18),
                    elevation: 10,
                    backgroundColor: colors.PURPLEDARK1,
                    borderRadius: 30,
                    height: responsiveHeight(8),
                    paddingBottom: 10,
                },
                tabBarItemStyle: {
                    marginTop: 10,
                },
            }}
        >
            <Screen
                name={"Home"}
                component={Home}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <Icon size={responsiveFont(3.5)} source={Icons.WALLET_OUTLINE} color={color} />
                        }
                        return <Icon size={responsiveFont(3.5)} source={Icons.WALLET_OUTLINE} color={color} />
                    }
                }}
            />

            <Screen
                name={"Report"}
                component={Report}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <Icon size={responsiveFont(3.5)} source={Icons.CHART_LINE} color={color} />
                        }
                        return <Icon size={responsiveFont(3.5)} source={Icons.CHART_LINE} color={color} />
                    }
                }}
            />
            <Screen
                name={"Settings"}
                component={Settings}
                options={{
                    tabBarIcon({ color, focused }) {
                        if (focused) {
                            return <Icon size={responsiveFont(3.5)} source={Icons.COG_OUTLINE} color={color} />
                        }
                        return <Icon size={responsiveFont(3.5)} source={Icons.COG_OUTLINE} color={color} />
                    },
                }}
            />
        </Navigator>
    )
}