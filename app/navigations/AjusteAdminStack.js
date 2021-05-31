import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AjustesAdmin from "../screens/Ajustes/AjusteAdmin";
import AjusteAgregarPos from "../screens/Ajustes/AjusteAgregarPostre";
import AjusteEditarPos from "../screens/Ajustes/AjusteEditarPostre";
import AjusteEliminarPos from "../screens/Ajustes/AjusteEliminarPostre";

const Stack = createStackNavigator();

export default function AjusteAdminStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="ajusteAdmin"
                component={AjustesAdmin}
                options={{ title: "Ajustes del Sistema" }}
            />
            <Stack.Screen 
                name="agregar-postre"
                component={AjusteAgregarPos}
                options={{ title: "Agrega los postres" }}
            />
            <Stack.Screen 
                name="editar-postre"
                component={AjusteEditarPos}
                options={{ title: "Edita el postre" }}
            />
            <Stack.Screen 
                name="eliminar-postre"
                component={AjusteEliminarPos}
                options={{ title: "Elimina el postre" }}
            />
        </Stack.Navigator>
    );
}