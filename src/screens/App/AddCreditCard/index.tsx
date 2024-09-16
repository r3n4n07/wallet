
import Chip from "../../../assets/chip.png";
import useAddCardViewModel from "./viewModel";
import Brand from "../../../assets/brand.png";
import { responsiveFont } from "../../../utils/sizes";
import { Container, BrandImage, ChipImage, CircleBottomRight, CircleFilledTop, CircleTopRight, ContentBody, ContentFooter, ContentHeader, Title, ViewCreditCard } from "./styles";

export function AddCreditCard() {

    const { handleNavigation } = useAddCardViewModel();

    return (
        <Container className={"flex-1 bg-WHITE_100 justify-center"}>
            <ContentHeader className={"items-center"}>
                <Title className={"font-bold color-PURPLEDARK3"} style={{ fontSize: responsiveFont(2.5) }}>Adicionar Cartão de Crédito</Title>
            </ContentHeader>
            <ContentBody className={"h-[50%] items-center justify-center"}>
                <ViewCreditCard className={"bg-PURPLEDARK3 h-[85%] w-60 rounded-[55px] overflow-hidden max-[405px]:w-56 active:scale-105"} onPress={() => { handleNavigation("CardDataEntry") }}>
                    <CircleFilledTop className={"h-40 w-40 absolute top-[-50px] left-[-10px] bg-PURPLE4 rounded-full max-[405px]:left-[-25px]"} />
                    <CircleTopRight className={"border-4 absolute top-[-15px] right-[-10] h-20 w-20 border-PURPLE rounded-full"} />
                    <CircleBottomRight className={"h-40 w-40 absolute bottom-[-35px] right-[-30] border-4 border-PINK rounded-full"} />
                    <ChipImage source={Chip} className={"absolute top-20 left-12"} />
                    <BrandImage source={Brand} className={"absolute bottom-10 right-6"} />
                </ViewCreditCard>
            </ContentBody>
            <ContentFooter className={"justify-center items-center w-[65%] max-w-[250px] self-center"}>
                <Title numberOfLines={2}  adjustsFontSizeToFit style={{ fontSize: responsiveFont(2) }}>
                    Adicione um novo Cartão
                    na sua carteira para facilitar sua vida.
                </Title>
            </ContentFooter>
        </Container>
    );
}