import { Text, View, StyleSheet } from "react-native"
import Slider from '../slider'

const ExpenseCard = function() {
    return (
        <View style={[styles.card, styles.shadow, styles.cardMargin]}>
            <View style={{padding: 20}}>
                <Text style={styles.expenses}>10 %</Text>
                <Text style={styles.cardTitle}>Доступно средств: 500₽</Text>
                <Slider persentage="0.6" />
            </View>
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
        color: '#21BE1D',
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