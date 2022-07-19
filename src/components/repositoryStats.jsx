import React from "react";
import { View } from "react-native";
import StyledText from "./styledText";


const parseThousands = value => {
    return value => 1000
        ? `${Math.round(value/1000) /10 }k` 
        : String(value)
}

const RepositoryStats = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View>
                <StyledText align='center' fontWeight='bold'>Estadio</StyledText>
                <StyledText>{props.stadium}</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>Puntos</StyledText>
                <StyledText>{props.points}</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>Titulos</StyledText>
                <StyledText>{props.championships}</StyledText>
            </View>

        </View>
    )
}

export default RepositoryStats