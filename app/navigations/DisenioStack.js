import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Disenios from "../screens/Disenio/Disenio";
import DiseniosPan from "../screens/Disenio/DisenioPan";

const Stack = createStackNavigator();

export default function DisenioStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="disenio"
                component={Disenios}
                options={{ title: "Diseña tu Pastel" }}
            />
            <Stack.Screen 
                name="disenio-pan"
                component={DiseniosPan}
                options={{ title: "Elige el tipo de pan.." }}
            />
        </Stack.Navigator>
    );
}