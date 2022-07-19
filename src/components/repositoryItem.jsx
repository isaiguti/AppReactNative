import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import theme from "../theme.js";
import RepositoryStats from "./repositoryStats.jsx";
import StyledText from "./styledText.jsx";

const RepositoryItemHeader = (props) => {
    return (
        <View style={{flexDirection: 'row', paddingBottom: 2}}>
            <View style={{ paddingRight: 10}}>
                <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <StyledText fontWeight='bold' style={styles.language}>{props.fullName}</StyledText>
                <StyledText color='secondary'>{props.history}</StyledText>
            </View>
        </View>
    )
}


const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container} >
        <RepositoryItemHeader {...props}/>
        <RepositoryStats {...props} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        marginTop: 4,
        marginBottom: 4,
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 4
    }
})

export default RepositoryItem