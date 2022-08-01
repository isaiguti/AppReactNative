import React from "react";
import { Formik, useField } from 'formik';
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import StyleTextInput from "../components/styledTextInput.jsx";
import StyledText from "../components/styledText.jsx"
import { loginValidationSchema } from "../validationSchemas/login.js";

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    errors: {
        color: 'red',
        fontSize: 12,
        marginBottom: 20,
        marginTop: 5
    },
    form: {
        margin:12
    }
})

const FormikInputValue = ({ name, ...props}) => {
    const [field, meta, helpers] = useField(name)
    return (
        <>
            <StyleTextInput
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                { ...props }
            />
            {meta.error && <StyledText style={styles.errors}> {meta.error} </StyledText>}
        </>
    )
}


export default function LogInPage(){
    return <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={values => console.log(values)}> 
        {({ handleSubmit }) => {
            return (
            <View style={styles.form}>
                <FormikInputValue 
                    placeholder="Email" 
                    name='email'
                />
                <FormikInputValue 
                    placeholder="Password" 
                    name='password'
                    secureTextEntry
                />
                <Button onPress={handleSubmit} title="Log In" />
            </View>
            )
        }}
    </Formik>
}