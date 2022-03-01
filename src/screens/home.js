import React, {useEffect, useState} from 'react';
import {View, Text, Button, FlatList, TouchableOpacity, Modal, StyleSheet, Keyboard} from "react-native";
import {globalStyles} from "../styles/global";
import Card from "../shared/card";
import {MaterialIcons} from "@expo/vector-icons";
import ReviewForm from "./reviewForm";
import {TouchableWithoutFeedback} from "react-native-gesture-handler";
import Loader from "../shared/loader";
import getReviews from "../hooks/getReviews";
import axios from "axios";


export default function Home({navigation})
{
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        (async ()=>{
            try{
                setLoading(true)
                const data = await getReviews();
                setReviews(data)
                setLoading(false)
                console.log("Got the data....")
            }catch (err){
                console.log(err);
            }
        })();
    },[]);



    const addReview = async (review) => {
        review.key = Math.random().toString();
        try {
            setLoading(true)
            let res = await axios.post('/reviews',review)
            if(res.data){
                setReviews((curReviews)=>{
                    return [res.data,...curReviews]
                })
            }
            setLoading(false)
        }
        catch(err) {
            console.log(err)
        }
        setModalOpen(false)
    }
    return (
        !loading ?
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                {/*<TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}} accessible={false}>*/}
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            style={{...styles.modalToggle, ...styles.modalClose}}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                {/*</TouchableWithoutFeedback>*/}
            </Modal>
            <View>
                <MaterialIcons
                    name='add'
                    size={24}
                    style={styles.modalToggle}
                    onPress={() => setModalOpen(true)}
                />

                <FlatList data={reviews} renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}/>
            </View>

        </View> : <Loader/>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
})


// { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
// { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
// { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },