import React from 'react';
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from 'react-native';

export default function Ajustes(){
    const navigation = useNavigation();
    return(

        <ScrollView centerContent={true} styles={styles.viewBody}>
            <Text style={styles.textTitle}>Ajustes Del Administrador</Text>

            <View style={styles.viewBtn}>
                <Button 
                    title="Agregar Postre"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("agregar-postre")}
                />
            </View>

            <View style={styles.viewBtn}>
                <Button 
                    title="Editar Postre"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("editar-postre")}
                />
            </View>

            <View style={styles.viewBtn}>
                <Button 
                    title="Eliminar Postre"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("eliminar-postre")}
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
