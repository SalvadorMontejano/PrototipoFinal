import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favoritos from "../screens/Favoritos/Favorito";
import DetallePostreFavoritos from "../screens/Detalle/DetallePostreFavorito";


const Stack = createStackNavigator();

export default function FavoritoStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="favorito"
                component={Favoritos}
                options={{ title: "Mis postres Favoritos" }}
            />
                      
           
            <Stack.Screen 
                name="favorito-Detalle"
                component={DetallePostreFavoritos}
                options={{ title: "Detalles Postre" }}
            />
             
        </Stack.Navigator>
    );
}