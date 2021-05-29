import React from 'react';
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from 'react-native';

export default function InicioPostre(){
    const navigation = useNavigation();
    return(
        <ScrollView centerContent={true} styles={styles.viewBody}>
            <Text style={styles.textTitle}>Bienvenido Julitas postres y mas</Text>

            <View style={styles.viewBtn}>
                <Button 
                    title="Ver Postre"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("inicioAgregar")}
                />
            </View>

            <View style={styles.viewBtn}>
                <Button 
                    title="Detalle de producto"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("inicioDetalle")}
                />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewBody: {
      marginLeft: 30,
      marginRight: 30
    },
    textTitle: {
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    },
    btnAddMaestro: {
      marginBottom: 5
    },
    btnStyle: {
      backgroundColor: "#00a680"
    },
    btnContainer: {
      width: "70%"
    },
    viewBtn: {
      flex: 1,
      alignItems: "center",
      marginBottom: 30
    }
  });