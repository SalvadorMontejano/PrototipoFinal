import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favoritos from "../screens/Favoritos/Favorito";


const Stack = createStackNavigator();

export default function FavoritoStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="favorito"
                component={Favoritos}
                options={{ title: "Mis postres Favoritos" }}
            />
             
        </Stack.Navigator>
    );
}