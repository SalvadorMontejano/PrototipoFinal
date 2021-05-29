import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Disenios from "../screens/Disenio/Disenio";

const Stack = createStackNavigator();

export default function DisenioStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="disenio"
                component={Disenios}
                options={{ title: "Diseña tu Pastel" }}
            />
        </Stack.Navigator>
    );
}