import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ajustes from "../screens/Ajustes/Ajuste";

const Stack = createStackNavigator();

export default function AjusteStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="ajuste"
                component={Ajustes}
                options={{ title: "Ajustes del Sistema" }}
            />
        </Stack.Navigator>
    );
}