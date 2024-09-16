import { Icons } from '../../../styles/icons';
import useSettingsViewModel from './viewModel';
import { responsiveFont } from '../../../utils/sizes';
import { fontFamily } from "../../../styles/fontFamily";
import { ButtonOptions } from '../../../components/ButtonOptions';
import { ButtonAccountActions } from "../../../components/ButtonAccountActions";
import { Container, ContentBody, ContentFooter, ContentHeader, Title } from "./styles";

export function Settings() {

    const {
        handleNavigation,
        logOut
    } = useSettingsViewModel();

    return (
        <Container className={"flex-1 bg-WHITE_100"}>
            <ContentHeader className={"items-center h-[20%] justify-center"}>
                <Title className={"color-PURPLE3"} style={{ fontSize: responsiveFont(3.5), fontFamily: fontFamily.POPPINSMEDIUM }}>Configurações</Title>
            </ContentHeader>
            <ContentBody>
                <ButtonOptions title={"Perfil"} iconName={"account-outline"} onPress={() => handleNavigation('Profile')} />
                <ButtonOptions title={"Notificação"} iconName={"bell-outline"} />
                <ButtonOptions title={"Minha Carteira"} iconName={"wallet-outline"} />
                <ButtonOptions title={"Configurações de Login"} iconName={"shield-key-outline"} />
                <ButtonOptions title={"Central de Atendimento"} iconName={"phone-outgoing-outline"} />
            </ContentBody>
            <ContentFooter className={"justify-center items-center h-[20%]"}>
                <ButtonAccountActions
                    iconName={Icons.LOGOUT}
                    title={"Sair"}
                    onPress={logOut}
                />
            </ContentFooter>
        </Container>
    )
}

