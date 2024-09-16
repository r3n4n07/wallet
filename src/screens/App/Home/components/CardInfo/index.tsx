import { fontFamily } from "../../../../../styles/fontFamily";
import { responsiveFont } from "../../../../../utils/sizes";
import { Container, TitleLeftBottom, TitleLeftTop, TitleRightBottom, TitleRightTop, ViewTitlesRight, ViewTitlesLeft, CircleBottom, CircleTop } from "./styles";

interface CardInfoProps {
    balance:number,
    bank:string
};

export function CardInfo({ balance, bank }: CardInfoProps) {
    return (
        <Container className={"h-[50%] w-full max-w-[450px] flex-row rounded-[60px] items-center justify-around shadow-xl shadow-BLACK overflow-hidden bg-PURPLEDARK2"}>
            <CircleTop className={"absolute top-[-20px] left-0 w-16 h-16 bg-PURPLE4 rounded-full"} />
            <ViewTitlesLeft className={"w-[50%] h-24"}>
                <TitleLeftTop className={"mb-2 color-WHITE"} style={{ fontFamily: fontFamily.POPPINSMEDIUM, fontSize: responsiveFont(2.6) }}>Saldo</TitleLeftTop>
                <TitleLeftBottom
                    numberOfLines={1}
                    adjustsFontSizeToFit={true}
                    className={"mb-2 color-WHITE"}
                    style={{ fontFamily: fontFamily.POPPINSMEDIUM, fontSize: responsiveFont(2.8) }}>
                    {Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(balance)}
                </TitleLeftBottom>
            </ViewTitlesLeft>
            <ViewTitlesRight className={"w-[30%] h-24"}>
                <TitleRightTop className={"mb-2 color-WHITE"} style={{ fontFamily: fontFamily.POPPINSMEDIUM, fontSize: responsiveFont(2.6) }}>Cartão</TitleRightTop>
                <TitleRightBottom numberOfLines={1} adjustsFontSizeToFit className={"mb-2 color-WHITE"} style={{ fontFamily: fontFamily.POPPINSMEDIUM, fontSize: responsiveFont(2.8) }}>{bank}</TitleRightBottom>
            </ViewTitlesRight>
            <CircleBottom className={"border-4 border-PURPLE -z-10 absolute right-[-58px] bottom-[-46px] rounded-full h-44 w-44"} />
        </Container>
    );
}