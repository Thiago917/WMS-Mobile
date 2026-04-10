import { Stack } from "expo-router";

export default function ProductionOrderLayout(){
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="[productionOrder]"/>
        </Stack>
    )
}