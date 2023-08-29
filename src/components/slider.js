import {View} from 'react-native'

const Slider = ({persentage}) => {
    const sliderWidth = 200

    return (
        <View style={{backgroundColor: "#E7EAFC", width: sliderWidth, height: 10, marginTop: 60}}>
            <View style={{backgroundColor: "#21BE1D", width: persentage * sliderWidth, height: 10}} />
        </View>
    )
}

export default Slider