import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AjustesAdmin from "../screens/Ajustes/AjusteAdmin";
import Consultapostreslista from "../screens/Ajustes/AjusteConsultaPostre";
import AjusteAgregarPos from "../screens/Ajustes/AjusteAgregarPostre";
import AjusteEditarPos from "../screens/Ajustes/AjusteEditarPostre";
import AjusteEditaXBusqueda from "../screens/Ajustes/BuscaPosEditar";
import AjusteEliminarPos from "../screens/Ajustes/AjusteEliminarPostre";
import AjusteEliminaXBusqueda from "../screens/Ajustes/BuscaPosEliminar";

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
                name="consulta-postres"
                component={Consultapostreslista}
                options={{ title: "Postres en existencia" }}
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
                name="editar-postre-Busqueda"
                component={AjusteEditaXBusqueda}
                options={{ title: "Postre a Editar" }}
            />
            <Stack.Screen 
                name="eliminar-postre"
                component={AjusteEliminarPos}
                options={{ title: "Elimina el postre" }}
            />
            <Stack.Screen 
                name="elimina-postre-Busqueda"
                component={AjusteEliminaXBusqueda}
                options={{ title: "Postre a Eliminar" }}
            />
        </Stack.Navigator>
    );
}

