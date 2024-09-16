import { PressableProps } from "react-native";
import { responsiveFont } from "../../utils/sizes";
import { fontFamily } from "../../styles/fontFamily";
import LogoGoogle from "../../assets/iconeGoogle.png";
import { ButtonGoogle, IconeGoogle, Title } from "./styles";

interface ButtonSocialGoogleProps extends PressableProps {
    title: string;
};

export function ButtonSocialGoogle({ title, ...rest }: ButtonSocialGoogleProps) {
    return (
        <ButtonGoogle {...rest} className={"h-[70px] w-[45%] max-w-[200px] bg-WHITE_100 items-center justify-center rounded-md mb-4 flex-row shadow-md shadow-BLACK p-1"}>
            <IconeGoogle source={LogoGoogle} resizeMode={"contain"} className={"h-12 w-12"} />
            <Title className={`ml-1 pt-1`} style={{ fontFamily: fontFamily.POPPINSREGULAR, fontSize:responsiveFont(2.2) }}>{title}</Title>
        </ButtonGoogle>
    );
};
