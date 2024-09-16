import { FlatList } from "react-native";
import useHomeViewModel from "./viewModel";
import { CardInfo } from "./components/CardInfo";
import { ListRenderItemInfo } from "react-native";
import { optionsCircleButton } from "../Home/data"
import { fontFamily } from "../../../styles/fontFamily";
import { CircleButton } from "./components/CircleButtons";
import { HeaderFlatList } from "../../../components/HeaderFlatlist";
import { CardTransaction } from "./components/CardTransactions";
import type { Transaction } from "../../../store/slices/creditCardSlice/model";
import { responsiveFont, responsiveHeight } from "../../../utils/sizes";
import { Avatar, Container, ContentBody, ContentHeader, Description, Title, ViewTitle, ContentFooter } from "./styles";

export function Home() {

    const {
        balance,
        bank,
        photo,
        putLastTransactionsOnTopList,
        handleNavigation
    } = useHomeViewModel();


    const renderCardTransaction = ({ item }: ListRenderItemInfo<Transaction>) => {
        return <CardTransaction {...item} />
    };


    return (
        <Container className={"flex-1 bg-WHITE"}>
            <ContentHeader className={"my-5 mx-8  flex-row justify-between items-center h-[10%] max-h-[70px]"} >
                <ViewTitle className={"justify-center"}>
                    <Title className={"color-PURPLE3"} style={{ fontFamily: fontFamily.POPPINSMEDIUM, fontSize: responsiveFont(2.8) }}>Wallet</Title>
                    <Description className={"font-medium"} style={{ fontSize: responsiveFont(2.2) }}>Active</Description>
                </ViewTitle>
                <Avatar className={" w-[70px] h-[70px] rounded-full"} source={{ uri: photo }} />
            </ContentHeader>
            <ContentBody className={"items-center justify-center mx-4 h-[44%] max-h-[400px]"}>
                <CardInfo
                    balance={balance}
                    bank={bank}
                />
                <FlatList
                    data={optionsCircleButton}
                    className={"my-8"}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    renderItem={({ item }) => (<CircleButton
                        onPress={() => handleNavigation(item.route)}
                        iconName={item.iconName}
                        label={item.label}
                    />
                    )}
                />
            </ContentBody>
            <ContentFooter className={"h-[32%] max-h-[280px] max-[405px]:max-h-[240px]"}>
                <HeaderFlatList />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={putLastTransactionsOnTopList}
                    renderItem={renderCardTransaction}
                    keyExtractor={(item, index) => index.toString()}
                    getItemLayout={(data, index) => ({
                        length: responsiveHeight(6.5), // Altura do seu componente (aproximada ou exata)
                        offset: responsiveHeight(6.5) * index, // Multiplica a altura pelo índice para obter o deslocamento
                        index
                    })}
                    initialNumToRender={20}
                    maxToRenderPerBatch={30}
                    updateCellsBatchingPeriod={50}
                    decelerationRate={"fast"}
                />
            </ContentFooter>
        </Container>
    );
};