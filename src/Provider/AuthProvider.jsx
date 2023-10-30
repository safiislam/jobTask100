import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect } from "react";
import auth from "../utils/firebase.config";
import { useDispatch } from "react-redux";
import { setUser, toggleLoading } from "../Redux/user/userSlice";
import { addJwt, removeJwt } from "../Redux/Jwt/jwtSlice";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    // const {} = useSelector()
    const dispatch = useDispatch()

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currenUser =>{
            console.log(currenUser)
            if(currenUser){
                dispatch(setUser({
                    name : currenUser.displayName,
                    email : currenUser.email
                }))
                dispatch(toggleLoading(false))
                fetch(`${import.meta.env.VITE_LIVE_URL}`,{
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({email: currenUser?.email})
                })
                .then(res=>{
                    if(res){
                        dispatch(addJwt(res.token))
                    }
                })
                
            }
            else{
                dispatch(toggleLoading(false))
                dispatch(removeJwt())
            }
        })
        return ()=>{
            return unsubscribe()
        }
    },[dispatch])
    
    const authInfo = {}
    
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;