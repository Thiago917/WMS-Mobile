import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { router } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";

export type UserType = {
    id: number;
    name: string;
    email: string;
    departments_id: number;
}

type User = {
    user: UserType | null;
    loadUser: () => Promise<void> 
}

const UserContext = createContext<User>({} as User);
 
export const UserProvider = ({children} : {children: React.ReactNode}) => {

    const [user, setUserState] = useState<UserType | null>(null);

    const loadUser = async () => {
        try{
            const token = await AsyncStorage.getItem('@userToken')

            if(!token) return router.replace('/login');
            const response = await axios.get(`https://tsgodev.tsapp.com.br/api/tsscanner/me`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            const res = response.data
            if(res.error){
                console.log('Erro ao buscar dados do usuário | ', res.message)
                return router.replace('/login')
            }

            setUserState(res[0])
        }
        catch(err){
            console.log('Erro ao buscar dados do usuário | ', err)
            return router.replace('/login')
        }
    }

    useEffect(() => {
        loadUser()
    }, [])


    return(
        <UserContext.Provider value={{user, loadUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)