import { fontFamily } from "../../styles/fontFamily";
import { ButtonLink, Container, TextLink, Title } from "./styles";
import { responsiveFont } from "../../utils/sizes";

export function HeaderFlatList() {
    return (
        <Container className={"flex-row items-center justify-between mx-3 mb-1"}>
            <Title className={"color-PURPLE3"} style={{fontFamily:fontFamily.POPPINSBOLD, fontSize:responsiveFont(2.2)}}>Últimas Transações</Title>
            <ButtonLink>
                <TextLink className={" color-PURPLE5"} style={{fontFamily:fontFamily.POPPINSMEDIUM, fontSize:responsiveFont(2)}}>Ver Tudo</TextLink>
            </ButtonLink>
        </Container>
    );
}