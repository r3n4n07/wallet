import { ScrollView } from "react-native";
import { Icons } from "../../../styles/icons";
import useRegisterViewModel from "./viewModel";
import { Input } from "../../../components/Input";
import { KeyboardAvoidingView } from "react-native";
import { responsiveFont } from "../../../utils/sizes";
import { fontFamily } from "../../../styles/fontFamily";
import { ButtonPrimary } from "../../../components/ButtonPrimary";
import { ButtonTextLink } from "../../../components/ButtonTextLink";
import { ButtonSocialGoogle } from "../../../components/ButtonSocialGoogle";
import { ButtonSocialFacebook } from "../../../components/ButtonSocialFacebook";
import { Container, ContentBody, ContentFooter, ContentHeader, Description, Title, ViewButton } from "./styles";

export function Register() {

    const {
        control,
        errors,
        username,
        password,
        email,
        isLoading,
        secureTextEntry,
        setUsername,
        setPassword,
        setEmail,
        setSecureTextEntry,
        handleSubmit,
        handleGoBack,
        handleRegister
    } = useRegisterViewModel();

    return (
        <Container className={"flex-1 pt-[10px] px-5 bg-WHITE_100"}>
            <ScrollView className={"flex-1"} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"handled"}>
                <KeyboardAvoidingView behavior={"position"} enabled keyboardVerticalOffset={60}>
                    <ContentHeader className={"items-center justify-center p-5"}>
                        <Title className={"text-2xl text-center mt-10 color-BLACK"} style={{ fontFamily: fontFamily.POPPINSMEDIUM, fontSize:responsiveFont(2.7) }}>Registre-se agora e aproveite as facilidades do App Carteira</Title>
                        <Description className={`mt-[45px] mb-4 text-base color-GRAY4`} style={{ fontFamily: fontFamily.POPPINSLIGHT, fontSize:responsiveFont(2) }}>Entrar com rede sociais</Description>
                        <ViewButton className={"h-auto w-full flex-row justify-between"}>
                            <ButtonSocialGoogle title={"Google"} />
                            <ButtonSocialFacebook iconName={"facebook"} title={"Facebook"} />
                        </ViewButton>
                    </ContentHeader>
                    <ContentBody className={"items-center"}>
                        <Input
                            placeholder={"Username"}
                            autoCapitalize={"none"}
                            keyboardType={"default"}
                            name={"usernameRegister"}
                            leftIcon={Icons.ACCOUNT_OUTLINE}
                            control={control}
                            errors={errors}
                            onChangeText={(text) => { setUsername(text) }}
                            value={username}
                        />
                        <Input
                            placeholder={"Email"}
                            autoCapitalize={"none"}
                            keyboardType={"email-address"}
                            name={"emailRegister"}
                            leftIcon={Icons.EMAIL_OUTLINE}
                            control={control}
                            errors={errors}
                            onChangeText={(text) => { setEmail(text) }}
                            value={email}
                        />
                        <Input
                            placeholder={"Password"}
                            autoCapitalize={"none"}
                            keyboardType={"default"}
                            name={"passwordRegister"}
                            leftIcon={Icons.SHIELD_KEY_OUTLINE}
                            secureTextEntry={secureTextEntry}
                            setSecureTextEntry={setSecureTextEntry}
                            rightIcon={true}
                            control={control}
                            errors={errors}
                            onChangeText={(text) => { setPassword(text) }}
                            value={password}
                        />
                        <ButtonPrimary
                            title={"Registrar-se"}
                            isLoading={isLoading}
                            onPress={handleSubmit(handleRegister)}
                        />
                    </ContentBody>
                    <ContentFooter className={"mt-3 items-center justify-center"}>
                        <ButtonTextLink
                            onPress={handleGoBack}
                            title={"Já tem uma conta?"}
                            linkTitle={"Login"}
                        />
                    </ContentFooter>
                </KeyboardAvoidingView>
            </ScrollView>
        </Container>
    );
}