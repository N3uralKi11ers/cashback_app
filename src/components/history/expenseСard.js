import { Text, View, StyleSheet } from "react-native"
import Slider from "../slider"


const ExpenseCard = function() {
    return (
        <View style={[styles.card, styles.shadow, styles.cardMargin, {padding: 20}]}>
            <Text style={styles.cardTitle}>Расходы за сегодня</Text>
            <Text style={styles.expenses}>10 $</Text>
            <Slider persentage="0.7" />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 400,
        height: 200,
        borderRadius: 16,
    },
    cardTitle: {
        fontSize: 20,
    },
    expenses: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 4,
    },
    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 5,
    },
    cardMargin: {
        margin: 40,
    }
})

export default ExpenseCard