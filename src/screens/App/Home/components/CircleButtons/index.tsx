import { PressableProps } from "react-native";
import colors from "../../../../../styles/colors";
import type { OptionsCircleButton } from "../../data";
import { fontFamily } from "../../../../../styles/fontFamily";
import { Button, Container, LabelButton, Avatar } from "./styles";
import { responsiveFont, responsiveWidth } from "../../../../../utils/sizes";

interface CircleButtonProps extends PressableProps, Omit<OptionsCircleButton, "route"> { };

export function CircleButton({ iconName, label, ...rest }: CircleButtonProps) {

    const numberOfLines = label.split(" ").length > 1 ? 2 : 1; // If the string has more than 2 words, the line will break.

    return (
        <Container className={" items-center mx-2 w-[20%]"} style={{ width: responsiveWidth(18) }}>
            <Button {...rest} className={"bg-WHITE_100 rounded-[28px] shadow-lg shadow-BLACK mb-4 active:bg-GRAY4 p-3"}>
                <Avatar source={iconName} size={responsiveFont(4.3)} color={colors.PURPLEDARK3} />
            </Button>
            <LabelButton className={"color-PURPLE5 text-center"} numberOfLines={numberOfLines} adjustsFontSizeToFit={true} style={{ fontFamily: fontFamily.POPPINSMEDIUM, fontSize: responsiveFont(1.8) }}>
                {label}
            </LabelButton>
        </Container>
    );
}