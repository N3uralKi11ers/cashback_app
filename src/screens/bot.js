import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';


const Button = ({ title }) => (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

const ButtonImage = ({ title, btnImage }) => {
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
            {title}
        </Text>
        <Icon title={image} color="white" size="30" />
    </TouchableOpacity>
}

const ButtonStack = () => (
    <View>
        <Button title="ОТВЕТ НА ВОПРОС" />
        <Button title="ГОЛОСОВОЙ ПОМОЩНИК" />
        <Button title="ПОДОБРАТЬ УСЛУГУ" />
        <Button title="ОТПРАВИТЬ ЗАПРОС В БАНК" />
    </View>
);

function BotScreen() {
    return (
        <View style={styles.container}>
        <Text style={styles.message}>Привет, я твой личный ассистент. Умею:</Text>
        <ButtonStack />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#21BE1D'
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginBottom: 10,
    },
    buttonText: {
        color: '#21BE1D',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    message: {
        color: "white",
        fontSize: 20,
        marginBottom: 50,
        width: 300,
        fontWeight: "bold",
        textAlign: 'center',
    }
})

export default BotScreen