import React from "react";
import { Text, StyleSheet } from 'react-native';
import theme from "../theme.js";

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.primary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.textPrimary
    },
    colorSecundary: {
        color: theme.colors.textSecundary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    textAlignCenter: {
        textAlign: 'center'
    }
})

export default function StyledText ({ align, children, color, fontSize, fontWeight, style, ...restOfProps}){
    const textStyles = [
        styles.text,
        align == 'center' && styles.textAlignCenter,
        color == 'primary' && styles.colorPrimary,
        color == 'secondary' && styles.colorSecundary,
        fontSize == 'subheading' && styles.subheading,
        fontWeight == 'bold' && styles.bold,
        style
    ]
    return (
        <Text style={textStyles} { ...restOfProps}>
            {children}
        </Text>
    )
}
