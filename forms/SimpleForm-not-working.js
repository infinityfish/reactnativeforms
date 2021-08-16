import React from 'react';
 import { Field, Form, Formik, FormikProps } from 'formik';
import { Text, TextInput, View, Alert } from 'react-native';
import * as yup from 'yup';
 
 const MyTextInput = ({ field, form, ...props }) => {
   return (
       <View>
           <TextInput {...field} {...props} />   
           {meta.touched && meta.error && (
                   <View className="error">{meta.error}</View>
                 )}
       </View>
   );
 };
 
 const myValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required'),
  phoneNumber: yup
    .string()
    .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
    .required('Phone number is required'),
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email is required'),
  color: yup
    .string()
    .required('Color is required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
})
  const SimpleForm = () => (
    
   <View>
     <Text>My Form</Text>
     <Formik
       initialValues={{ email: '', color: 'red', firstName: '', lastName: '' }}
       onSubmit={(values) => console.log(values) }
     >
       {(props) => (
         <Form>
           <Field name="fullName" placeholder="Enter Your Full Name" component={MyTextInput}/>
           <Field name="phoneNumber" placeholder="Enter Your Phone number" component={MyTextInput} />
           <Field type="email" name="email" placeholder="Email" component={MyTextInput}/>
           <Field as="select" name="color">
             <option value="red">Red</option>
             <option value="green">Green</option>
             <option value="blue">Blue</option>
           </Field>
 
           <Field name="lastName">
             {({
               field, // { name, value, onChange, onBlur }
               form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
               meta,
             }) => (
               <View>
                 <TextInput type="text" placeholder="Email" {...field} />
                 {meta.touched && meta.error && (
                   <View className="error">{meta.error}</View>
                 )}
               </View>
             )}
           </Field>
           <Field name="lastName" placeholder="Doe" component={MyTextInput} />
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </View>
 );

 export default SimpleForm;