import React from 'react';
import { StyleSheet, View, ScrollView, Text } from "react-native";

const Searchbar=()=>{
    return(
        <view style={styles.container}>
            <TextInput placeholder='busca aqui'/>
        </view>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100 %',
        height:50,
        backgroundColor:'white ',
        borderRadius:8
    },
    searchInput:{
        width:'100%',
        height:'100%',
        paddingLeft:8,
        fontSize:16
    }
});
export default Searchbar;