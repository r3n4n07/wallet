import useProfileViewModel from "./viewModel";
import colors from "../../../../styles/colors";
import { Icons } from "../../../../styles/icons";
import { responsiveFont } from "../../../../utils/sizes";
import { ButtonOptions } from "../../../../components/ButtonOptions";
import { ButtonArrowGoBack } from "../../../../components/ButtonArrowGoBack";
import { ButtonAccountActions } from "../../../../components/ButtonAccountActions";
import { Container, ContentBody, ContentFooter, ContentHeader, Icon, Name, UserImage, ViewNameIcon, } from "./styles";

export function Profile() {

    const {
        name,
        photo,
        handleGoBack
    } = useProfileViewModel();

    return (
        <Container className={"flex-1 bg-WHITE_100"}>
            <ContentHeader className={"justify-center items-center h-[30%]"}>
                <ButtonArrowGoBack onPress={handleGoBack} />
                <UserImage source={{ uri: photo }} className={" w-[96px] h-[96px] rounded-full"}/>
                <ViewNameIcon className={"flex-row justify-center items-center mt-2"}>
                    <Name className={"color-PURPLE3 font-medium mt-1"} style={{ fontSize: responsiveFont(3.5) }}>{name}</Name>
                    <Icon icon={Icons.PENCIL_OUTLINE} className={"m-0 active:bg-purple-200"} size={responsiveFont(3.5)} iconColor={colors.PURPLEDARK3} />
                </ViewNameIcon>
            </ContentHeader>
            <ContentBody className={"items-center h-[40%]"}>
                <ButtonOptions title={"Contas Conectadas"} />
                <ButtonOptions title={"Segurança e Privacidade"} />
                <ButtonOptions title={"Configurações de Login"} />
                <ButtonOptions title={"Central de Atendimento"} />
            </ContentBody>
            <ContentFooter className={"justify-center items-center h-[20%]"} >
                <ButtonAccountActions
                    iconName={Icons.DELETE_OUTLINE}
                    title={"Deletar Conta"}
                />
            </ContentFooter>
        </Container>
    )
}