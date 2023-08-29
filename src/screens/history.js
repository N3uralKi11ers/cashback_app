import React from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import Cell from '../components/history/cell'
import ExpenseCard from '../components/history/expenseСard';

function HistoryScreen() {
    return (
        <ScrollView style={{backgroundColor: "white", paddingTop: 20}}>
            <ExpenseCard />
            {/* <Text>Моя история переводов</Text> */}
            <Cell to="YVES ROCHER" type="Оплата товаров и услуг" amount="1234" />
            <Cell to="YVES ROCHER" type="Оплата товаров и услуг" amount="1234" />
            <Cell to="YVES ROCHER" type="Оплата товаров и услуг" amount="1234" />
            <Cell to="YVES ROCHER" type="Оплата товаров и услуг" amount="1234" />
            <Cell to="YVES ROCHER" type="Оплата товаров и услуг" amount="1234" />
            <Cell to="YVES ROCHER" type="Оплата товаров и услуг" amount="1234" />
            <Cell to="YVES ROCHER" type="Оплата товаров и услуг" amount="1234" />
            <Cell to="YVES ROCHER" type="Оплата товаров и услуг" amount="1234" />
            <Cell to="YVES ROCHER" type="Оплата товаров и услуг" amount="1234" />
            <Cell to="YVES ROCHER" type="Оплата товаров и услуг" amount="1234" />
            <Cell to="YVES ROCHER" type="Оплата товаров и услуг" amount="1234" />
            <Cell to="YVES ROCHER" type="Оплата товаров и услуг" amount="1234" />
            <Cell to="YVES ROCHER" type="Оплата товаров и услуг" amount="1234" />
            <Cell to="YVES ROCHER" type="Оплата товаров и услуг" amount="1234" />
            <Cell to="YVES ROCHER" type="Оплата товаров и услуг" amount="1234" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({

})

export default HistoryScreen