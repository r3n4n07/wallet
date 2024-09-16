import type { Months } from "./model";
import colors from "../../../styles/colors";
import useReportViewModel from "./viewModel";
import { List, Checkbox } from 'react-native-paper';
import { fontFamily } from "../../../styles/fontFamily";
import Svg, { Defs, LinearGradient, Stop } from "react-native-svg";
import { HeaderFlatList } from "../../../components/HeaderFlatlist";
import { CardTransaction } from "../Home/components/CardTransactions";
import { Transaction } from "../../../store/slices/creditCardSlice/model";
import { ScrollView, FlatList, ListRenderItemInfo, View, Text } from "react-native";
import { responsiveFont, responsiveHeight, responsiveWidth } from "../../../utils/sizes";
import { VictoryChart, VictoryAxis, VictoryScatter, VictoryTooltip, VictoryArea } from "victory-native";
import { Container, ContentBody, ContentFooter, ContentHeader, ViewCheckbox, ViewFilters } from "./styles";

export function Report() {

    const {
        chartScroll,
        maxDomainY,
        chartData,
        isDisplayingFlyouts,
        months,
        balance,
        toggleCheck,
        handleDisplayChartPoint,
        displayAllMonths,
        putLastTransactionsOnTopList
    } = useReportViewModel();


    const checkBox = ({ item, index }: ListRenderItemInfo<Months>) => {
        return <Checkbox.Item style={{ height: 45 }} labelStyle={{ color: colors.WHITE_100 }} color="#D71CDB" uncheckedColor="white" label={item.month} status={item.isSelected} onPress={() => { toggleCheck(index) }} />
    };

    
    const renderCardTransaction = ({ item }: ListRenderItemInfo<Transaction>) => {
        return <CardTransaction {...item} />
    };


    return (
        <Container className={"flex-1 bg-WHITE_100"}>
            <ContentHeader className="h-[45%]">
                <ViewFilters className={"mx-2 mt-2 z-50"}>
                    <ViewCheckbox className={"w-[125px] h-[45px] border-2 border-PURPLEDARK1 rounded-md bg-PURPLEDARK1 justify-center"}>
                        <Checkbox.Item labelStyle={{ fontSize: responsiveFont(1.8), fontWeight: "bold", color: colors.WHITE_100 }} color="#D71CDB" uncheckedColor={colors.WHITE_100} label={"Tudo"} status={isDisplayingFlyouts ? "checked" : "unchecked"} onPress={displayAllMonths} />
                    </ViewCheckbox>
                    <List.Section className={"w-[125px] absolute right-0 bg-PURPLEDARK1 m-0 rounded-md border-2 border-PURPLEDARK1"}>
                        <List.Accordion
                            title="Meses"
                            titleStyle={{ fontSize: responsiveFont(1.8), fontWeight: "bold", color: colors.WHITE_100 }}
                            style={{
                                backgroundColor: colors.PURPLEDARK1,
                                height: 45,
                                justifyContent: 'center',
                                paddingVertical: 0,
                                padding: 0
                            }}
                            right={props => (
                                <List.Icon
                                    {...props}
                                    icon={props.isExpanded ? "chevron-down" : "chevron-up"}
                                    color={colors.WHITE_100}
                                />
                            )}
                        >
                            <FlatList
                                data={months}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={checkBox}
                                initialNumToRender={months.length}
                            />
                        </List.Accordion>
                    </List.Section>
                </ViewFilters>
                <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }} ref={chartScroll} showsHorizontalScrollIndicator={false}>
                    <Svg style={{ width: responsiveWidth(24 * months.length) }}>
                        <Defs>
                            <LinearGradient id="myGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <Stop offset="10%" stopColor="#8438FF" stopOpacity={0.3} />
                                <Stop offset="70%" stopColor="#FFF" stopOpacity={0.5} />
                            </LinearGradient>
                        </Defs>
                        <VictoryChart
                            standalone={false}
                            maxDomain={{ y: maxDomainY }}
                            minDomain={{ y: 0 }}
                            width={responsiveWidth(24 * months.length)}
                            domainPadding={5}
                        >
                            <VictoryAxis
                                dependentAxis
                                style={{
                                    axis: { strokeWidth: 0 },
                                    tickLabels: { display: "none" }
                                }}
                            />
                            <VictoryAxis
                                style={{
                                    axis: { stroke: "#E0E0E0", strokeWidth: 2 },
                                    tickLabels: { fill: "#9A9A9A", fontSize: 16 },
                                }}
                                tickFormat={["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"].slice(0, months.length)}
                            />
                            <VictoryArea
                                animate={{
                                    duration: 3000,
                                    easing: "linear",
                                    onLoad: {
                                        duration: 3000,
                                        before: () => ({ y: 0 }), // Começa a animação do eixo y = 0
                                        after: (datum) => ({ y: datum.y }) // Anima até o valor correto de y
                                    },
                                    animationWhitelist: ["x", "y"]
                                }}
                                data={chartData}
                                interpolation={"natural"}
                                style={{
                                    data: { fill: "url(#myGradient)", stroke: "#8438FF", strokeWidth: 4 },
                                    labels: { fill: "white" }
                                }}
                            />
                            <VictoryScatter
                                data={chartData}
                                size={({ datum }) => handleDisplayChartPoint(datum) === "checked" ? 8 : 0}
                                style={{ data: { fill: "#8438FF" }, labels: { fill: "white", } }}
                                labels={({ datum }) => `R$ ${datum.y}`}
                                labelComponent={<VictoryTooltip
                                    active={isDisplayingFlyouts}
                                    renderInPortal={false}
                                    flyoutStyle={{ fill: "#8438FF", strokeWidth: 0 }}
                                    flyoutHeight={40}
                                    cornerRadius={10}
                                    flyoutPadding={20}
                                    pointerLength={10}
                                    pointerWidth={15}
                                    dy={-20}
                                />}
                            />
                        </VictoryChart>
                    </Svg>
                </ScrollView>
            </ContentHeader>
            <ContentBody className={"justify-center, items-center mb-4"}>
                <View className={"justify-center items-center max-w-[60%]"}>
                    <Text className={"color-GRAY3"} style={{ fontSize: responsiveFont(2.5), fontFamily: fontFamily.POPPINSMEDIUM }}>Saldo Atual</Text>
                    <Text className={"color-PURPLE font-bold"} numberOfLines={1} adjustsFontSizeToFit style={{ fontSize: responsiveFont(5) }}>{Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(balance)}</Text>
                </View>
            </ContentBody>
            <ContentFooter className={"mx-2 h-[30%] max-h-[270px]"}>
                <HeaderFlatList />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={putLastTransactionsOnTopList}
                    renderItem={renderCardTransaction}
                    keyExtractor={(item, index) => index.toString()}
                    getItemLayout={(data, index) => ({
                        length: responsiveHeight(6.5), 
                        offset: responsiveHeight(6.5) * index, 
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
