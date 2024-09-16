import colors from "../../styles/colors";
import { responsiveFont } from "../../utils/sizes";
import { fontFamily } from "../../styles/fontFamily";
import { ButtonFacebook, IconeFacebook, Title } from "./styles";

interface ButtonSocialFacebookProps {
    title: string;
    iconName: string;
};

export function ButtonSocialFacebook({ iconName, title }: ButtonSocialFacebookProps) {
    return (
        <ButtonFacebook className={"h-[70px] w-[45%] max-w-[200px] bg-BLUE items-center justify-center rounded-md mb-4 flex-row shadow-md shadow-BLACK p-1"}>
            <IconeFacebook source={iconName} size={36} color={colors.WHITE_100} />
            <Title className={`ml-2 pt-1 text-WHITE_100`} numberOfLines={1} adjustsFontSizeToFit style={{ fontFamily: fontFamily.POPPINSREGULAR, fontSize: responsiveFont(2.2) }}>{title}</Title>
        </ButtonFacebook>
    );
};

