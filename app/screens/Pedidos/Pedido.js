import React from 'react';
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";


export default function Pedidos(){
    return(
        <View>
            <Button
                icon={
                    <Icon
                    name="arrow-left"
                    size={15}
                    color="white"
                    />
                }
                title="Cambiar Direccion"
            />
            <Button
                icon={
                    <Icon
                    name="arrow-left"
                    size={15}
                    color="white"
                    />
                }
                title="Finalizar Pedido"
            />
        </View>
    );
}