import { Container,Information, TitleDetails } from "./styles";
import { fontFamily } from "../../../../../../../styles/fontFamily";
import { responsiveFont } from "../../../../../../../utils/sizes";

interface InfoCreditCardProps {
    title:string,
    information:string
};

export const InfoCreditCard = ({title, information}: InfoCreditCardProps) => {
    return (
        <Container className={"border-red-600 flex-row mb-3 mx-2"}>
            <TitleDetails numberOfLines={1} className="w-[40%] text-center color-slate-400" style={{ fontFamily: fontFamily.POPPINSMEDIUM, fontSize: responsiveFont(1.7) }}>{title}</TitleDetails>
            <Information numberOfLines={1} className="w-[60%] font-semibold color-black" adjustsFontSizeToFit style={{ fontFamily: fontFamily.POPPINSMEDIUM, fontSize: responsiveFont(1.7) }}>{information}</Information>
        </Container>
    )
}