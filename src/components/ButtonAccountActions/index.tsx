import colors from "../../styles/colors";
import { PressableProps } from "react-native";
import type { icons } from "../../styles/icons";
import { responsiveFont } from "../../utils/sizes";
import { fontFamily } from "../../styles/fontFamily";
import { Avatar, Container, Title, ViewAvatar } from "./styles";

interface ButtonAccountActionsProps extends PressableProps {
    iconName: icons,
    title: string
};

export function ButtonAccountActions({ iconName, title, ...rest }: ButtonAccountActionsProps) {
    return (
        <Container {...rest} className={"items-center"}>
            <ViewAvatar className={"border-2 rounded-full border-gray-200 p-3 mb-3"}>
                <Avatar source={iconName} color={colors.PURPLEDARK2} size={responsiveFont(4.5)} />
            </ViewAvatar>
            <Title className={"color-PURPLEDARK2"} style={{ fontFamily: fontFamily.POPPINSBOLD, fontSize: responsiveFont(2) }}>{title}</Title>
        </Container>
    );
};