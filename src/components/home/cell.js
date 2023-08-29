import { Text, View, StyleSheet } from 'react-native'

const Cell = function({to, type, amount}) {
    return (
        <View style={[styles.cell, styles.shadow]}>
            <View>
                <Text style={styles.title}>{to}</Text>
                <Text style={{flex: 2}}>{type}</Text>
            </View>
            <Text style={styles.price}>{amount} ₽</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "black",
        marginBottom: 4,
        flex: 1
    },
    cell: {
        backgroundColor: "white",
        shadowColor: 'black',
        padding: 16,
        marginVertical: 4,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 5,
    },
    price: {
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        textAlign: 'right',
        marginVertical: "auto",
        fontSize: 20,
    },
})

export default Cell