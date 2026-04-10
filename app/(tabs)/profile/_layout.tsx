import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function profileLayout(){
    return(
        <Stack screenOptions={{headerShown: false}}>
            <StatusBar style="dark" />
            <Stack.Screen name="index"/>
        </Stack>
    )
}