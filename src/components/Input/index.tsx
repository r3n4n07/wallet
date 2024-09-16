import colors from "../../styles/colors.js";
import { Icons } from "../../styles/icons.ts";
import type { AllKeys } from "../../schemas/index.ts";
import { TextInputProps } from "react-native";
import type { icons } from "../../styles/icons.ts";
import { fontFamily } from "../../styles/fontFamily.ts";
import { responsiveFont } from "../../utils/sizes.ts";
import { Container, ContainerInputText, InputController, InputText, LeftIcon, RightIcon, ErrorMessage } from "./styles.ts";

interface InputProps extends TextInputProps {
    name: AllKeys,
    leftIcon: icons,
    rightIcon?: boolean,
    onChangeText: (text: string) => void,
    control: any,
    errors: any
    secureTextEntry?: boolean,
    setSecureTextEntry?: React.Dispatch<React.SetStateAction<boolean>>
};

export function Input({ name, leftIcon, rightIcon, secureTextEntry = false, onChangeText = () => { }, control, errors, setSecureTextEntry = () => { }, ...rest }: InputProps) {
    return (
        <Container className={"w-full h-[60px] mb-6"}>
            <InputController
                control={control}
                name={name}
                render={({ field: { onChange, onBlur } }) => (
                    <>
                        <ContainerInputText className={"flex-row items-center bg-gray-200 h-[100%] rounded-xl border-gray-200 focus:border-BLUE1 border-2 pl-2"}>
                            <LeftIcon source={leftIcon} size={responsiveFont(3.2)} color={colors.GRAY2} />
                            <InputText
                                {...rest}
                                placeholderTextColor={colors.GRAY3}
                                style={{ fontFamily: fontFamily.POPPINSMEDIUM, fontSize: responsiveFont(2) }}
                                className={"flex-1 font-semibold color-GRAY2 ml-2 pt-4"}
                                onChangeText={(text) => { onChange(text), onChangeText(text) }}
                                onBlur={onBlur}
                                secureTextEntry={secureTextEntry}
                            />

                            {rightIcon && <RightIcon icon={!secureTextEntry ? Icons.EYE_OUTLINE : Icons.EYE_OFF_OUTLINE} iconColor={colors.GRAY2} size={responsiveFont(3.2)} className={"m-0 w-[12%]"} onPress={() => setSecureTextEntry(!secureTextEntry)} />}
                        </ContainerInputText>
                        <ErrorMessage adjustsFontSizeToFit={true} numberOfLines={1} className={"color-ATTENTION"} style={{fontSize:responsiveFont(1.7)}}>{errors[name]?.message ? errors[name]?.message : ""}</ErrorMessage>
                    </>
                )}
            />
        </Container>
    );
}