import colors from "../../styles/colors";
import { Icons } from "../../styles/icons";
import { Container, Avatar } from "./styles";
import { PressableProps } from "react-native";
import { responsiveFont } from "../../utils/sizes";

export function ButtonArrowGoBack({ ...rest }: PressableProps) {
    return (
        <Container {...rest} className={"absolute left-5 top-3 rounded-full active:bg-purple-200 z-50"}>
            <Avatar source={Icons.CHEVRON_LEFT_CIRCLE_OUTLINE} size={responsiveFont(4.5)} color={colors.PURPLEDARK2} />
        </Container>
    );
};