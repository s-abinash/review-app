import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import {Formik} from 'formik';
import FlatButton from '../shared/button.js'
import * as Yup from 'yup';


const reviewSchema = Yup.object({
    title: Yup.string().required().min(4),
    body: Yup.string().required().min(8),
    rating: Yup.string().required().test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {return parseInt(val) < 6 && parseInt(val) > 0;}),
    // test() => name, error message, validation
});

export default function ReviewForm({addReview}) {

    return (
        <View style={globalStyles.container}>
            <Formik initialValues={{ title: '', body: '', rating: '' }}
                    onSubmit={(values,actions) => {
                        console.log(values);
                        addReview(values)
                        actions.resetForm();
                    }}
                    validationSchema={reviewSchema}
            >
                {props => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        {/* only if the left value is a valid string, will the right value be displayed */}
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>


                        <TextInput
                            style={globalStyles.input}
                            multiline
                            minHeight={60}
                            placeholder='Review details'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>


                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1 - 5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                        />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                      {/*<Button color='maroon' title="Submit" onPress={props.handleSubmit} />*/}
                         <FlatButton onPress={props.handleSubmit} text='Submit'/>
                    </View>
                )}
            </Formik>
        </View>
    )
}