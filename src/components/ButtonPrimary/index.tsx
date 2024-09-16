import colors from "../../styles/colors";
import { PressableProps } from "react-native";
import { responsiveFont } from "../../utils/sizes";
import { fontFamily } from "../../styles/fontFamily";
import { Container, Loading, Title } from "./styles";

interface ButtonPrimaryProps extends PressableProps {
    title: string,
    isLoading: boolean,
};

export function ButtonPrimary({ title, isLoading, ...rest }: ButtonPrimaryProps) {
    return (
        <Container {...rest} disabled={isLoading} className={"w-[50%] max-w-[224px] h-[70px] items-center justify-center mt-[50px] rounded-2xl bg-PURPLEDARK2 active:bg-purple-700"} >
            {isLoading ?
                <Loading size={"large"} color={colors.WHITE_100} />
                :
                <Title numberOfLines={1} adjustsFontSizeToFit className={"color-WHITE_100 pt-1"} style={{ fontFamily: fontFamily.POPPINSMEDIUM, fontSize:responsiveFont(2.5) }}>
                    {title}
                </Title>
            }
        </Container>
    );
};