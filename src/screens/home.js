import React from 'react'
import {View, Text, TouchableOpacity, ScrollView, StyleSheet} from 'react-native'
import MiniCard from '../components/miniCard'
import CardMIR from '../components/home/cardMIR'
import Cell from '../components/home/cell'

const Name = () => {
    return 'Михаил' + ' 👋'
}

const UserCard = () => {
    return (
        <TouchableOpacity style={[styles.shadow, styles.userCard]}>
            
        </TouchableOpacity>
    )
}

const ReccomendationList = () => {

    // Use API

    const list = [1, 2, 3, 4, 5].map(i => (
        <Cell key={i} to="YVES ROCHER" type="Оплата товаров и услуг" amount="1234" />
    ))

    return (
        <>{list}</>
    )
}

const CardMIRList = () => {
    // Use API

    const list = [
        {cardNumber: '1234  5678  9102  4930', cardColor: '#63458A'},
        {cardNumber: '1234  5678  9102  4930', cardColor: '#033860'},
        {cardNumber: '1234  5678  9102  4930', cardColor: '#7E5A9B'},
        {cardNumber: '1234  5678  9102  4930', cardColor: '#033860'},
        {cardNumber: '1234  5678  9102  4930', cardColor: '#63458A'},
    ].map((card, i) => (
        <CardMIR key={i} cardNumber={card.cardNumber} cardColor={card.cardColor}/>
    ))

    return (
        <>{list}</>
    )
}


function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={{marginVertical: 20, paddingHorizontal: 20,}}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>{Name()}</Text>
                <Text style={{marginTop: 4}}>Рады видеть вас в Центр-Инвест</Text>
            </View>
            <ScrollView horizontal style={{marginVertical: 20, paddingHorizontal: 20,}}>
                <UserCard />
                <MiniCard title={"Личный кабинет"}/>
                <MiniCard title={"Офисы и банкоматы"}/>
                <MiniCard title={"Курсы валют"}/>
            </ScrollView>
            <View style={{marginVertical: 20}}>
                <Text style={styles.title}>Карты МИР</Text>
                <ScrollView horizontal style={{paddingLeft: 20}}>
                    <CardMIRList />
                </ScrollView>
            </View>
            <View style={{marginVertical: 20}}>
                <Text style={styles.title}>Рекомендации</Text>
                <ReccomendationList />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 5,
    },
    userCard: {
        backgroundColor: '#21BE1D', 
        width: 90, 
        borderRadius: 16, 
        marginVertical: 10, 
        marginRight: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 600,
        marginBottom: 8,
        marginLeft: 20
    }
})

export default HomeScreen