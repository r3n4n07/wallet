import { Controller } from "react-hook-form";
import useCardDataEntryViewModel from "./viewModel";
import { responsiveFont } from "../../../../../utils/sizes";
import { ButtonPrimary } from "../../../../../components/ButtonPrimary";
import { cardNumberMask, CvcMask, validMask } from "../../../../../utils/inputMask";
import { Container, ContentBody, ContentFooter, ContentHeader, ErrorMessage, Input, Label, Title, ViewInput, ViewInputsRow } from "./styles";

export function CardDataEntry() {

    const {
        cardHolderName,
        cvc,
        cardNumber,
        valid,
        isLoading,
        control,
        errors,
        setCardHolderName,
        setCvc,
        setCardNumber,
        setValid,
        handleSubmit,
        handleCardRegister
    } = useCardDataEntryViewModel();

    return (
        <Container className={"flex-1 bg-WHITE_100 justify-center"}>
            <ContentHeader className={"items-center"}>
                <Title className={"font-bold color-PURPLEDARK3"} style={{ fontSize: responsiveFont(2.5) }}>Insira os Dados do Cartão</Title>
            </ContentHeader>
            <ContentBody className={"mx-5 mt-10"}>
                <Controller
                    control={control}
                    name={"cardNumber"}
                    render={({ field: { onBlur, onChange }, }) => (
                        <ViewInput className={"mb-1"}>
                            <Label className={"color-gray-600 font-semibold"} style={{ fontSize: responsiveFont(1.6) }}>Número do Cartão</Label>
                            <Input
                                className={"border-b-2 border-PURPLEDARK2 p-0 mt-1"}
                                onChangeText={(text) => {
                                    const formatted = cardNumberMask(text);
                                    onChange(cardNumberMask(formatted));
                                    setCardNumber(cardNumberMask(formatted));
                                }}
                                onBlur={onBlur}
                                value={cardNumber}
                                maxLength={19}
                                keyboardType={"decimal-pad"}
                                editable={!isLoading}
                            />
                            <ErrorMessage className={"color-ATTENTION"} style={{ fontSize: responsiveFont(1.7) }}>{errors["cardNumber"]?.message ? errors["cardNumber"]?.message : ""}</ErrorMessage>
                        </ViewInput>
                    )}
                />
                <ViewInputsRow className={"flex-row"}>
                    <Controller
                        control={control}
                        name={"cvc"}
                        render={({ field: { onBlur, onChange } }) => (
                            <ViewInput className={"mb-1 flex-1 mr-1"}>
                                <Label className={"color-gray-600 font-semibold"} style={{ fontSize: responsiveFont(1.6) }}>CVC</Label>
                                <Input
                                    className={"border-b-2 border-PURPLEDARK2 p-0 mt-1"}
                                    onChangeText={(text) => { onChange(CvcMask(text)), setCvc(CvcMask(text)) }}
                                    onBlur={onBlur}
                                    value={cvc}
                                    maxLength={3}
                                    keyboardType={"decimal-pad"}
                                    editable={!isLoading}
                                />
                                <ErrorMessage adjustsFontSizeToFit={true} numberOfLines={1} className={"color-ATTENTION"} style={{ fontSize: responsiveFont(1.7) }}>{errors["cvc"]?.message ? errors["cvc"]?.message : ""}</ErrorMessage>
                            </ViewInput>
                        )}
                    />
                    <Controller
                        control={control}
                        name={"valid"}
                        render={({ field: { onBlur, onChange } }) => (
                            <ViewInput className={"mb-1 flex-1 ml-2"}>
                                <Label className={"color-gray-600 font-semibold"} style={{ fontSize: responsiveFont(1.6) }}>Validade</Label>
                                <Input
                                    className={"border-b-2 border-PURPLEDARK2 p-0 mt-1"}
                                    onChangeText={(text) => {
                                        const formatted = validMask(text);
                                        onChange(validMask(formatted));
                                        setValid(validMask(formatted));
                                    }}
                                    onBlur={onBlur}
                                    value={valid}
                                    maxLength={5}
                                    keyboardType={"decimal-pad"}
                                    editable={!isLoading}
                                />
                                <ErrorMessage adjustsFontSizeToFit={true} numberOfLines={1} className={"color-ATTENTION"} style={{ fontSize: responsiveFont(1.7) }}>{errors["valid"]?.message ? errors["valid"]?.message : ""}</ErrorMessage>
                            </ViewInput>
                        )}
                    />
                </ViewInputsRow>
                <Controller
                    control={control}
                    name={"cardHolderName"}
                    render={({ field: { onBlur, onChange } }) => (
                        <ViewInput className="mb-1">
                            <Label className={"color-gray-600 font-semibold"} style={{ fontSize: responsiveFont(1.6) }}>Nome do Titular</Label>
                            <Input
                                className={"border-b-2 border-PURPLEDARK2 p-0 mt-1"}
                                onChangeText={(text) => { onChange(text), setCardHolderName(text) }}
                                onBlur={onBlur}
                                value={cardHolderName}
                                editable={!isLoading}
                            />
                            <ErrorMessage className={"color-ATTENTION"} style={{ fontSize: responsiveFont(1.7) }}>{errors["cardHolderName"]?.message ? errors["cardHolderName"]?.message : ""}</ErrorMessage>
                        </ViewInput>
                    )}
                />
            </ContentBody>
            <ContentFooter className={"mt-3 items-center justify-center"}>
                <ButtonPrimary title={"Finalizar"} isLoading={isLoading} onPress={handleSubmit(handleCardRegister)} />
            </ContentFooter>
        </Container>
    )
}