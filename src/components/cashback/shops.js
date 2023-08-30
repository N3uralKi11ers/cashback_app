import { Text, View, StyleSheet } from "react-native"

const ShopCard = ({image}) => {
    return (
        <View style={[styles.shadow, card, {backgroundColor: "#EBEBEB"}]}>

        </View>
    )
}

const StatisticsCard = () => {
    return (
        <View style={[styles.shadow, card, {backgroundColor: "white"}]}>
            <Text>Посмотреть статистику</Text>
        </View>
    )
}

const ShopsGroup1 = function() {
    return (
        <View>
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <StatisticsCard />
        </View>
    )
}

const ShopsGroup2 = function() {
    return (
        <View>
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
    },
    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 5,
    },
})

export default ShopsGroup1