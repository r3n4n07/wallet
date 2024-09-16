import { styled } from "nativewind";
import { IconButton } from "react-native-paper";
import { ActivityIndicator, Pressable, Text } from "react-native";

export const Container = styled(Pressable);
export const Title = styled(Text);
export const Icon = styled(IconButton);
export const Loading = styled(ActivityIndicator);