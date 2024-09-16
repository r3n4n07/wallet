import useLoginViewModel from "./viewModel";
import { Icons } from "../../../styles/icons";
import { Input } from "../../../components/Input";
import { responsiveFont } from "../../../utils/sizes";
import { fontFamily } from "../../../styles/fontFamily";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { ButtonPrimary } from "../../../components/ButtonPrimary";
import { ButtonTextLink } from "../../../components/ButtonTextLink";
import { ButtonSocialGoogle } from "../../../components/ButtonSocialGoogle";
import { ButtonSocialFacebook } from "../../../components/ButtonSocialFacebook";
import { ButtonForgotPassword, Container, ContentBody, ContentFooter, ContentForgotPassword, ContentHeader, Description, Title, TitleForgotPassword, ViewButton } from "./styles";

export function Login() {
    
    const {
        username,
        password,
        secureTextEntry,
        setUsername,
        setPassword,
        setSecureTextEntry,
        isLoading,
        control,
        errors,
        handleSubmit,
        handleNavigate,
        loginGoogle,
        login
    } = useLoginViewModel();

    return (
        <Container className={`flex-1 bg-WHITE_100 pt-[10px] px-5`}>
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"handled"}>
                <KeyboardAvoidingView behavior={"position"} enabled keyboardVerticalOffset={60}>
                    <ContentHeader className={"items-center justify-center p-5"}>
                        <Title className={`text-center mt-10 color-BLACK`} style={{ fontFamily: fontFamily.POPPINSMEDIUM, fontSize:responsiveFont(2.7) }}>Seja bem vindo(a) {"\n"} a App Carteira</Title>
                        <Description className={`mt-[60px] mb-4 text-base color-GRAY4`} style={{ fontFamily: fontFamily.POPPINSLIGHT, fontSize:responsiveFont(2) }}>Entrar com rede sociais</Description>
                        <ViewButton className={"h-auto w-full flex-row justify-between"}>
                            <ButtonSocialGoogle title={"Google"} onPress={loginGoogle} />
                            <ButtonSocialFacebook iconName={"facebook"} title={"Facebook"} />
                        </ViewButton>
                    </ContentHeader>
                    <ContentBody className={"items-center"}>
                        <Input
                            placeholder={"Username"}
                            autoCapitalize={"none"}
                            keyboardType={"default"}
                            name={"usernameLogin"}
                            leftIcon={Icons.ACCOUNT_OUTLINE}
                            control={control}
                            errors={errors}
                            onChangeText={(text) => { setUsername(text) }}
                            value={username}
                            editable={!isLoading}
                        />
                        <Input
                            placeholder={"Password"}
                            autoCapitalize={"none"}
                            keyboardType={"default"}
                            name={"passwordLogin"}
                            leftIcon={Icons.SHIELD_KEY_OUTLINE}
                            rightIcon={true}
                            control={control}
                            errors={errors}
                            onChangeText={(text) => { setPassword(text) }}
                            value={password}
                            secureTextEntry={secureTextEntry}
                            setSecureTextEntry={setSecureTextEntry}
                            editable={!isLoading}
                        />
                        <ContentForgotPassword className={"w-full items-end"}>
                            <ButtonForgotPassword onPress={() => { handleNavigate("PasswordRecovery") }} className={"border-b-2 border-transparent active:border-b-2 active:border-BLUE4"}>
                                <TitleForgotPassword className={"ml-1 color-BLUE4"} style={{ fontFamily: fontFamily.POPPINSBOLD, fontSize:responsiveFont(1.8) }}>
                                    Esqueci minha senha
                                </TitleForgotPassword>
                            </ButtonForgotPassword>
                        </ContentForgotPassword>
                        <ButtonPrimary
                            title={"Entrar"}
                            isLoading={isLoading}
                            onPress={handleSubmit(login)}
                        />
                    </ContentBody>
                    <ContentFooter className={"mt-3 items-center justify-center"}>
                        <ButtonTextLink
                            onPress={() => { handleNavigate("Register") }}
                            title={"Não tem uma conta ainda?"}
                            linkTitle={"Registrar-se"}
                        />
                    </ContentFooter>
                </KeyboardAvoidingView >
            </ScrollView>
        </Container>
    );
}

