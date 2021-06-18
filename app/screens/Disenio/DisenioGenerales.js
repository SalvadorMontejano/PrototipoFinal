import React from 'react';
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from 'react-native';


export default function DisenioGenerales(){
    const navigation = useNavigation();
    return(
        <ScrollView centerContent={true} styles={styles.viewBody}>
        <Text style={styles.textTitle}>Detalles Postre</Text>

        <View style={styles.viewBtn}>
            <Button 
                title="Guardar"
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                onPress={() => navigation.navigate("favorito")}
            />
        </View>

        <View style={styles.viewBtn}>
            <Button 
                title="Enviar a Carrito de pedidos"
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                onPress={() => navigation.navigate("pedido")}
            />
        </View>

    </ScrollView>
    );
}