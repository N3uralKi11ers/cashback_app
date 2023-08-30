import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/cashback/card'
// import ShopsGroup1 from '../components/cashback/shops'


function CashbackScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={{marginTop: 20}}>
                <Text style={styles.title}>Мой кэшбек</Text>
                <Card />
            </View>
            <View>
                <Text style={styles.title}>Недавние покупки</Text>
                {/* <ShopsGroup1 /> */}
            </View>
            <View>
                <Text style={styles.title}>Выбрать категорию</Text>
                {/* <ShopsGroup2 /> */}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 600,
        marginBottom: 8,
    }
})

export default CashbackScreen