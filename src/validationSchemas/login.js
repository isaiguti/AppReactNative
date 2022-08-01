import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Escribe un email valido')
        .required('Email es requerido'),
    password: yup
        .string()
        .min(5, 'Es muy corto')
        .max(1000, 'Es muy largo')
        .required('Contraseña es requerido')
})