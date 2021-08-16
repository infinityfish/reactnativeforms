import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker'
 
 const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(20, 'Too Long!')
     .required('Required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(20, 'Too Long!')
     .required('Required'),

   email: Yup.string().email('Invalid email').required('Required'),

   color: Yup.string().required('Required'),

   phoneNumber: Yup
    .string()
    .matches(/^[2-9]\d{9}$/, 'Enter a valid phone number')
    .required('Phone number is required'),
    photo: Yup
    .object()
    // .required('Photo is required'),
 });
 
 const SimpleForm = () => (
<SafeAreaView style={styles.container}>
   <View style={styles.signupContainer}>
     <Text>Signup for Our Services</Text>
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
         phoneNumber: '',
         color: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ values, errors, touched, isValid, handleSubmit }) => (
         <Form>
           <Field name="firstName" placeholder="Enter Your First name" style={{marginTop: 5, borderRadius: 6}}/>
           {errors.firstName && touched.firstName ? (
             <View><Text>{errors.firstName}</Text></View>) : null}

           <Field name="lastName" placeholder="Enter Your Last name" style={{marginTop: 5, borderRadius: 6}}/>
           {errors.lastName && touched.lastName ? (
             <View><Text>{errors.lastName}</Text></View>) : null}
           
           <Field name="phoneNumber" placeholder="Enter Your Phone number" style={{marginTop: 5, borderRadius: 6}}/>
           {errors.phoneNumber && touched.phoneNumber ? (
             <View><Text>{errors.phoneNumber}</Text></View>) : null}
           <Field name="email" type="email" placeholder="Email" style={{marginTop: 5, borderRadius: 6}}/>
           {errors.email && touched.email ? <View><Text>{errors.email}</Text></View> : null}
           
           <Field as="select" name="color" placeholder="Pick Your Color" style={{marginTop: 5, borderRadius: 6}}>
             <option value="red">Red</option>
             <option value="green">Green</option>
             <option value="blue">Blue</option>
           </Field>

           <TouchableOpacity
                  style={styles.photoButton}
                  onPress={() => {
                    ImagePicker.showImagePicker(
                      { title: 'Select Photo' }, (response) => {
                        if (response.uri) setFieldValue('photo', response)
                        setFieldTouched('photo', true)
                    })
                  }}
                >
              <Text>Add Image</Text>
            </TouchableOpacity>

                {values.photo &&
                  <Text>{`...${values.photo.fileName.substr(values.photo.fileName.length - 10)}`}</Text>
                }

                {(errors.photo && touched.photo) &&
                  <Text style={{ color: 'red' }}>{errors.photo}</Text>
                }
           
            <TouchableOpacity style={styles.button}  onPress={ handleSubmit}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Register here</Text>
            </TouchableOpacity>
         </Form>
       )}
     </Formik>
   </View>
   </SafeAreaView>
 );

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    signupContainer: {
      width: '90%',
      alignItems: 'center',
      backgroundColor: 'green',
      padding: 10,
      elevation: 10,
      borderRadius: 10,
      backgroundColor: '#e6e6e6'
    },
    photoButton: {
      backgroundColor: 'green',
      elevation: 3,
      width: '40%',
      height: 30,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 5,
    },
    button: {
        alignItems: "center",
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
        width: '60%',
        marginTop: 10,
      },
  })

 export default SimpleForm;