import { PressableProps } from "react-native";
import { responsiveFont } from "../../utils/sizes";
import { Button, Title, LinkTitle } from "./styles";
import { fontFamily } from "../../styles/fontFamily";

interface ButtonToggleLoginRegisterProps extends PressableProps {
    title: string,
    linkTitle: string
};

export function ButtonTextLink({ title, linkTitle, ...rest }: ButtonToggleLoginRegisterProps) {
    return (
        <Button {...rest} className={"flex-row p-[2px] rounded-md active:bg-gray-100"}>
            <Title className={"color-GRAY4"} style={{ fontFamily: fontFamily.POPPINSMEDIUM, fontSize: responsiveFont(1.8) }}>{title}</Title>
            <LinkTitle className={"ml-1 color-BLUE4"} style={{ fontFamily: fontFamily.POPPINSBOLD, fontSize: responsiveFont(1.8) }}>{linkTitle}</LinkTitle>
        </Button>
    );
};