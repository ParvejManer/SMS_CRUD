import React from 'react';
import { Button, Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const StudentForm = ({ initialValues, onSubmit }) => {
    
    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Full Name is required'),
        class: Yup.string()
            .required('Class is required'),
        rollNumber: Yup.number()
            .typeError('Roll Number must be a number')
            .positive('Roll Number must be a positive number')
            .required('Roll Number is required'),
    });

    const formik = useFormik({
        initialValues,
        enableReinitialize: true,
        validationSchema,
        onSubmit: (values, actions) => {
            onSubmit(values);
            actions.resetForm();
        },
    });

    return (
        <Stack
            component='form'
            onSubmit={formik.handleSubmit}
            spacing={3}
            sx={{ mb: 7, maxWidth: '900px' }}
        >
            <Stack direction='row' spacing={2}>
                <TextField
                    label='Full Name'
                    name='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin='normal'
                    InputLabelProps={{ shrink: true }}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    required
                />

                <TextField
                    label='Class'
                    name='class'
                    value={formik.values.class}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin='normal'
                    InputLabelProps={{ shrink: true }}
                    error={formik.touched.class && Boolean(formik.errors.class)}
                    helperText={formik.touched.class && formik.errors.class}
                    required
                />

                <TextField
                    label='Roll Number'
                    name='rollNumber'
                    value={formik.values.rollNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin='normal'
                    InputLabelProps={{ shrink: true }}
                    error={formik.touched.rollNumber && Boolean(formik.errors.rollNumber)}
                    helperText={formik.touched.rollNumber && formik.errors.rollNumber}
                    required
                />

                <Button type='submit' variant='contained' color='primary' sx={{ width: '500px', height: '50px' }}>
                    {initialValues.id ? 'Update' : 'Add Student'}
                </Button>
            </Stack>
        </Stack>
    );
};

export default StudentForm;
