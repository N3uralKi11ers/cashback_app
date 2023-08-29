import { ScrollView, View, Text, Pressable } from "react-native"


// titles 
const Menu = ({titles}) => {
    return (
        <ScrollView horizontal>
            {titles.map((title, index) => (
                <View key={index} style={{ margin: 10 }}>
                    <Pressable>
                        <Text>{title}</Text>
                    </Pressable>
                </View>
            ))}
        </ScrollView>
    )
}

export default Menu