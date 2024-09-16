import type { icons } from "../../../../styles/icons";
import type { HomeStackParamList } from "../../../../routes/type";

export type OptionsCircleButton = {
    iconName: icons;
    label: string;
    route: keyof HomeStackParamList
}

export const optionsCircleButton: OptionsCircleButton[] = [
    {
        iconName: "bank-transfer",
        label: "Transferir",
        route: "DetailsCreditCard"
    },
    {
        iconName: "cash-minus",
        label: "Pagar",
        route: "DetailsCreditCard"
    },
    {
        iconName: "cash-plus",
        label: "Investir",
        route: "DetailsCreditCard"
    },
    {
        iconName: "credit-card-outline",
        label: "Cartão",
        route: "DetailsCreditCard"
    },
]


