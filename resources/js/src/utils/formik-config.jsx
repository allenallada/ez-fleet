import * as Yup from 'yup';

export const getRegisterFormik = (onSubmit) => {
    return {
        initialValues: {
            userName: '',
            firstName: '',
            lastName: '',
            password: '',
            cPassword: '',
            submit: null
        },
        validationSchema: Yup.object({
            userName: Yup.string()
            .label('Username')
            .max(20)
            .min(3)
            .required('Username is required'),
            firstName: Yup.string()
            .label('First name')
            .max(50)
            .required('First Name is required'),
            lastName: Yup.string()
            .label('Last name')
            .max(50)
            .min(3),
            password: Yup.string()
            .label('Password')
            .max(50)
            .min(8)
            .required('Password is required'),
            cPassword:  Yup.string()
            .when('password', {
                is : password => password !== undefined,
                then : () => {
                    return Yup.string().required('You must confirm your password')
                    .oneOf([Yup.ref('password')], 'Passwords must match')
                },
                otherwise: () => Yup.string()
            })
        }),
        onSubmit
    }
}

export const getProfileFormik = (details, onSubmit) => {
    return {
        initialValues: {
            first_name : details.first_name,
            last_name : details.last_name,
            email : !details.email ? '' : details.email,
            mobile : !details.mobile ? '' : details.mobile
        },
        validationSchema : Yup.object({
            first_name : Yup.string()
            .label('First name')
            .max(50)
            .min(3)
            .required('First name is required'),
            last_name : Yup.string()
            .label('Last name')
            .max(50)
            .min(3)
            .required('Last name is required'),
            email : Yup.string()
            .email('Must be a valid email'),
            mobile : Yup.string().matches(/^[0-9-]*$/, {message: "Please enter valid number.", excludeEmptyString: false})
        }),
        onSubmit,
        enableReinitialize : true,
        validateOnChange : false
    }
}

export const getPasswordFormik = (onSubmit) => {
    return {
        initialValues : {
            n_password : '',
            c_password : ''
        },
        validationSchema : Yup.object({
            n_password : Yup.string()
            .label('Password')
            .max(50)
            .min(8),
            c_password : Yup.string()
                .when('n_password', {
                is : n_password => n_password !== undefined,
                then : () => {
                    return Yup.string().required('You must confirm your password')
                    .oneOf([Yup.ref('n_password')], 'Passwords must match')
                },
                otherwise: () => Yup.string()
            })
        }),
        onSubmit,
        enableReinitialize : true,
        validateOnChange : false
    }
}

export const getLoginFormik = (onSubmit) => {
    return {
        initialValues : {
            username : '',
            password : ''
        },
        validationSchema : Yup.object({
            username : Yup.string()
            .required('Username is Required'),
            password : Yup.string()
            .required('Password is Required')
        }),
        onSubmit
    }
}

export const getVehicleFormik = (values, onSubmit) => {
    return {
        initialValues : {
            plate_number : values.plate_number,
            brand : values.brand,
            model : values.model,
            status : values.status,
            image_src : values.image_src
        },
        validationSchema : Yup.object({
            plate_number : Yup.string()
            .max(20)
            .required('Plate number is required'),
            brand : Yup.string()
            .max(50)
            .required('Brand is required'),
            model : Yup.string()
            .max(50)
            .required('Model is required'),
            status : Yup.string()
            .required('Please select a status'),
            image_src : Yup.string()
            .required()
        }),
        onSubmit,
        validateOnChange : false,
        validateOnBlur : true
    }
}