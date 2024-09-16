import colors from "../../styles/colors";
import { Icons } from "../../styles/icons";
import { PressableProps } from "react-native";
import type { icons } from "../../styles/icons";
import { responsiveFont } from "../../utils/sizes";
import { fontFamily } from "../../styles/fontFamily";
import { Container, ViewIcon, Avatar, Arrow, Title } from "./styles";

interface ButtonOptionsProps extends PressableProps {
    iconName?: icons,
    title: string,
};

export function ButtonOptions({ iconName, title, ...rest }: ButtonOptionsProps) {
    return (
        <Container {...rest} className={"flex-row items-center mx-6 mb-6"}>
            {iconName &&
                <ViewIcon className={"mr-7 bg-WHITE_100 rounded-[25px] shadow-md shadow-BLACK p-3"}>
                    <Avatar source={iconName} color={colors.PURPLE3} size={responsiveFont(3.2)} />
                </ViewIcon>
            }
            <Title className={"flex-1 color-PURPLE3"} adjustsFontSizeToFit={true} numberOfLines={1} style={{ fontSize: responsiveFont(1.8), fontFamily: fontFamily.POPPINSMEDIUM }}>{title}</Title>
            <Arrow source={Icons.CHEVRON_RIGHT} color={colors.PURPLE3} size={responsiveFont(3)} />
        </Container>
    );
};