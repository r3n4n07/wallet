import { styled } from "nativewind";
import { Controller } from "react-hook-form";
import { Text, View, TextInput } from "react-native";
import { Icon, IconButton } from "react-native-paper";

export const Container = styled(View);
export const InputController = styled(Controller);
export const ContainerInputText = styled(View);
export const InputText = styled(TextInput);
export const LeftIcon = styled(Icon);
export const RightIcon = styled(IconButton);
export const ErrorMessage = styled(Text);