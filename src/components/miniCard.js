import {View, Text, StyleSheet} from 'react-native'

const miniCard = ({ title }) => {
    return (
        <View style={[styles.shadow, styles.card, {backgroundColor: "white"}]}>
            <Text style={{fontSize: 18, width: 130}}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 16,
        margin: 10,
    },
    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 5,
    },
})

export default miniCard