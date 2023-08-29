import { Text, View, StyleSheet } from "react-native"

const CardMIR = ({cardNumber, cardColor}) => {
    return (
        <View style={[{backgroundColor: cardColor}, styles.card, styles.shadow, styles.align]}>
            <View style={styles.miniRectInCard}/>
            <Text style={{color: 'white', fontSize: 24}}>{cardNumber}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 40,
        height: 200,
        marginRight: 10,
        marginVertical: 10,
        borderRadius: 20,
    },
    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 5,
    },
    align: {
        flex: 1, 
        justifyContent: 'center',
    },
    miniRectInCard: {
        backgroundColor: '#E5E8B6', 
        width: 60, 
        height: 40, 
        borderRadius: 10, 
        marginBottom: 8,
    }
})

export default CardMIR