import React from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import Cell from '../components/history/cell'
import ExpenseCard from '../components/history/expenseСard';
import Menu from '../components/menu'

const HistoryList = () => {
    // use API for this

    const list = [1, 2, 3, 4, 5, 6, 7].map(i => (
        <Cell key={i} to="YVES ROCHER" type="Оплата товаров и услуг" amount="1234" />
    ))

    return (
        <>{list}</>
    )
}

const categories = () => {
    // use API for this

    return [
        'ТИП ОПЕРАЦИИ',
        'ПЕРИОД',
        'КАРТА ИЛИ СЧЕТ',
        'СУММА',
        'КЭШБЕК',
    ]
}

function HistoryScreen() {
    return (
        <ScrollView style={{backgroundColor: "white", paddingTop: 20}}>
            <ExpenseCard />
            <Menu titles={categories()} />
            <HistoryList />
        </ScrollView>
    );
}

const styles = StyleSheet.create({

})

export default HistoryScreen