import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from "../_features/user/userAuthSlice"
export default function (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        const dispatch = useDispatch()
        const navigator = useNavigate()
        useEffect(() => {
            dispatch(auth()).then(response => {
                if (!response.payload.isAuth) {
                    if (option) {
                        navigator('/loginpage')
                    }
                } else {
                    if (adminRoute && !response.payload.isAdmin) {
                        navigator('/')
                    } else {
                        if (option === false) {
                            navigator('/')
                        }
                    }
                }
            })
        }, [])
        return <SpecificComponent />
    }
    return AuthenticationCheck
}