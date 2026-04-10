import { Stack } from "expo-router";

export default function bipLayout(){
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="[order]"/>
        </Stack>
    )
}