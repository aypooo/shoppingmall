import React from 'react'
import Menu from '@ant-design/icons';
import axios from 'axios';
import { USER_SERVER } from '../../../../Config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// function getItem(label, key, icon, children) {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     };
// }
// const menuitems = [
//     getItem(<a href="/login"> Signin</a>, 'mail'),
//     getItem(<a href="/register">Signup</a>, 'app'),
// ]
// const isAuthMenu = [
//     getItem('Logout', 'logout'),
//     // <a onclick="logoutHandler">Logout</a>
// ]
function RightMenu(props) {
    const auth = useSelector(state => state.auth)
    const navigate = useNavigate()
    const logoutHandler = () => {
        axios.get(`${USER_SERVER}/logout`)
            .then(response => {
                if (response.status === 200) {
                    navigate('/login')
                } else {
                    alert('로그아웃 하는데 실패 했습니다.')
                }
            })
    }

    if (auth.userData && !auth.userData.isAuth) {
        return (
            // <Menu mode={props.mode}
            //     items={menuitems}
            // >
            // </Menu>
            <>
                <Link to="/login">Signin</Link>
                <Link to="/register">Signup</Link>
            </>
        )
    }
    return (
        // <Menu mode={props.mode}
        //     items={isAuthMenu}
        //     onClick={logoutHandler}
        // >
        // </Menu>
        <>
            <Link to="/product/upload">Upload</Link>
            <div onClick={logoutHandler}>logout</div>
        </>
    )

}
export default RightMenu;