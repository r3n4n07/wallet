import { Icons } from "../../../styles/icons";
import { Input } from "../../../components/Input";
import { responsiveFont } from "../../../utils/sizes";
import usePasswordRecoveryViewModel from "./viewModel";
import { fontFamily } from "../../../styles/fontFamily";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { ButtonPrimary } from "../../../components/ButtonPrimary";
import { ButtonTextLink } from "../../../components/ButtonTextLink";
import { Container, ContentBody, ContentFooter, ContentHeader, Description, ViewButton } from "./styles";

export function PasswordRecovery() {

    const {
        control,
        errors,
        email,
        setEmail,
        handleSubmit,
        handleGoBack,
        handlePasswordRecovery
    } = usePasswordRecoveryViewModel();

    return (
        <Container className={"flex-1 bg-WHITE_100 px-5"}>
            <ScrollView className="flex-1" contentContainerStyle={{ justifyContent: 'center', flex: 1 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"handled"}>
                <KeyboardAvoidingView behavior="position" enabled>
                    <ContentHeader className={"items-center p-5"}>
                        <Description className={"color-BLACK"} numberOfLines={1} adjustsFontSizeToFit style={{ fontFamily: fontFamily.POPPINSBOLD, fontSize: responsiveFont(3) }}>Recupere sua senha!</Description>
                    </ContentHeader>
                    <ContentBody>
                        <Input
                            placeholder={"Email de recuperação"}
                            autoCapitalize={"none"}
                            keyboardType={"email-address"}
                            name={"emailPasswordRecoverySchema"}
                            leftIcon={Icons.EMAIL_OUTLINE}
                            control={control}
                            errors={errors}
                            onChangeText={(text) => { setEmail(text) }}
                            value={email}
                        />
                        <ViewButton className={"items-center"}>
                            <ButtonPrimary
                                title={"Enviar"}
                                isLoading={false}
                                onPress={handleSubmit(handlePasswordRecovery)}
                            />
                        </ViewButton>
                    </ContentBody>
                    <ContentFooter className={"mt-3 items-center justify-center"}>
                        <ButtonTextLink
                            onPress={handleGoBack}
                            title={"Lembrou a senha?"}
                            linkTitle={"Login"}
                        />
                    </ContentFooter>
                </KeyboardAvoidingView>
            </ScrollView>
        </Container>
    )
}