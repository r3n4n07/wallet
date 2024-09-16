import Chip from "../../../../../assets/chip.png";
import Brand from "../../../../../assets/brand.png";
import useDetailsCreditCardViewModel from "./viewModel";
import { responsiveFont } from "../../../../../utils/sizes";
import { InfoCreditCard } from "./components/infoCreditCard";
import { fontFamily } from "../../../../../styles/fontFamily";
import { ButtonArrowGoBack } from "../../../../../components/ButtonArrowGoBack";
import {
    ViewCreditCard,
    CircleBottomRight,
    BrandImage,
    ChipImage,
    CircleFilledTop,
    CircleTopRight,
    ContentBody,
    ContentFooter,
    ContentHeader,
    Container,
    Title,
    ButtonDeleteCreditCard,
    TextButtonDeleteCreditCard,
} from "./styles";

export function DetailsCreditCard() {

    const {
        bank,
        cardHolderName,
        cardNumber,
        status,
        valid,
        handleGoBack
    } = useDetailsCreditCardViewModel();

    return (
        <Container className="flex-1 bg-WHITE">
            <ContentHeader className={"h-[15%] items-center justify-end"}>
                <ButtonArrowGoBack onPress={handleGoBack} />
                <Title className={"font-bold color-PURPLEDARK3"} style={{ fontSize: responsiveFont(2.5) }}>Detalhes do Cartão</Title>
            </ContentHeader>
            <ContentBody className={"h-[70%] items-center justify-center"}>
                <ViewCreditCard className={"bg-PURPLEDARK3 h-[65%] w-60 rounded-[55px] overflow-hidden max-[405px]:w-56 active:scale-105 rotate-90"}>
                    <CircleFilledTop className={"h-40 w-40 absolute top-[-50px] left-[-10px] bg-PURPLE4 rounded-full max-[405px]:left-[-25px]"} />
                    <CircleTopRight className={"border-4 absolute top-[-15px] right-[-10] h-20 w-20 border-PURPLE rounded-full"} />
                    <CircleBottomRight className={"h-40 w-40 absolute bottom-[-35px] right-[-30] border-4 border-PINK rounded-full"} />
                    <ChipImage source={Chip} className={"absolute top-20 left-12"} />
                    <BrandImage source={Brand} className={"absolute bottom-10 right-6 -rotate-90"} />
                </ViewCreditCard>
                <InfoCreditCard title="Nome" information={cardHolderName} />
                <InfoCreditCard title="Banco" information={bank} />
                <InfoCreditCard title="Número" information={cardNumber} />
                <InfoCreditCard title="Status" information={status ? "Ativo" : "Inativo"} />
                <InfoCreditCard title="Validade" information={valid} />
            </ContentBody>
            <ContentFooter className={"items-center justify-center mt-3"}>
                <ButtonDeleteCreditCard>
                    <TextButtonDeleteCreditCard className="color-PURPLEDARK2" style={{ fontFamily: fontFamily.POPPINSBOLD, fontSize: responsiveFont(2) }}>Deletar Cartão</TextButtonDeleteCreditCard>
                </ButtonDeleteCreditCard>
            </ContentFooter>
        </Container>

    );
};