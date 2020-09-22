import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const FormDiv = styled.form`
	display: flex;
	border-radius: 10px;
	color: white;
	margin: 0 auto;
	flex-direction: column;
	background: #a64949;
	width: 80%;
`;


const PostForm = () => {

    const formik = useFormik({
        initialValues: {
            title: "",
            directions: "",
            materials: ""
        },

        validationSchema: yup.object({
            title: yup.string()
                .min(5, "Title must be a minimum of 5 characters")
                .max(20, "Title can only contain 20 characters or less")
                .required("Required"),
            directions: yup.string()
                .max(250, "Directions must contain 250 characters or less")
                .required("Required"),
            materials: yup.string()
                .required("Required")
        }),

        onSubmit: values => {
            axios
            .post('https://how-to-app-backend-api.herokuapp.com/api/tutorials', values)
            .then(res => {
                console.log("Results:", res.data);
            })
            .catch(err => {
                console.log("Error:" , err)
            })
        }
    })

    return (
        <FormDiv onSubmit={formik.handleSubmit}>

            <label htmlFor="title" >Title</label>
            <input
            id="title"
            name="title" 
            type="text" 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            value={formik.values.title} />
            {formik.touched.title && formik.errors.title ? <div>{formik.errors.title}</div> : null }

            <label htmlFor="directions" >Directions</label>
            <textarea 
            id="directions"
            name="directions"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.directions} />
            {formik.touched.directions && formik.errors.directions ? <div>{formik.errors.directions}</div> : null }

            <label htmlFor="materials" >Materials</label>
            <textarea 
            id="materials"
            name="materials"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.materials} />
            {formik.touched.materials && formik.errors.materials ? <div>{formik.errors.materials}</div> : null }

            <button type="submit" >Submit How-To</button>

        </FormDiv>
    )

};

export default PostForm;