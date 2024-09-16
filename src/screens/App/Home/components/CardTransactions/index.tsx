import colors from "../../../../../styles/colors";
import { fontFamily } from "../../../../../styles/fontFamily";
import { responsiveFont, responsiveHeight } from "../../../../../utils/sizes";
import type { Transaction } from "../../../../../store/slices/creditCardSlice/model";
import { Avatar, Cash, Container, TransactionHour, TransactionName, ViewAvatar, ViewTransaction } from "./styles";

interface CardTrasactionProps extends Omit<Transaction, "date"> { }

export function CardTransaction({ iconName, transactionName, transactionHour, cash }: CardTrasactionProps) {
    return (
        <Container className={"flex-row items-center p-1 max-[405px]:h-14"} style={{ height: responsiveHeight(6.5) }}>
            <ViewAvatar className={"w-[14%] items-center justify-center"}>
                <Avatar source={iconName} size={responsiveFont(4.5)} color={colors.GRAY} />
            </ViewAvatar>
            <ViewTransaction className={"flex-1 pl-1"}>
                <TransactionName className={"color-BLACK font-bold"} numberOfLines={1} ellipsizeMode={"tail"} style={{ fontSize: responsiveFont(2) }}>{transactionName}</TransactionName>
                <TransactionHour style={{ fontSize: responsiveFont(1.6) }}>{transactionHour}</TransactionHour>
            </ViewTransaction>
            <Cash className={"color-BLACK w-max-[35%]"} adjustsFontSizeToFit={true} style={{ fontFamily: fontFamily.POPPINSMEDIUM, fontSize: responsiveFont(1.9) }}>{Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(cash)}</Cash>
        </Container>
    )
}