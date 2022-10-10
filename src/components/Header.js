import { useMutation, useQuery } from '@apollo/client';
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LogoutMutation from '../mutations/LogoutMutation';
import CurrentUser from '../queries/CurrentUser';

function Header() {
    const { loading, error, data } = useQuery(CurrentUser);
    const location=useLocation()
    const navigate=useNavigate()
    const [logout,{loading:logoutLoading,error:logoutErr,data:logoutData}]=useMutation(LogoutMutation)
   const handleLogout=()=>{
    logout({
        refetchQueries:[{query:CurrentUser}]
    })
   }
    const renderButtons = () => {
        if (loading) { return <div></div> }
        if (data?.user) {
            if(location.pathname==="/"){
            return (
                <div>
        
                <li><a onClick={()=>navigate("/login")}>Login</a></li>
               
                </div>)
            }
            else{
                return(
                    <li><a onClick={handleLogout}>Logout</a></li>
                )
            }
        } else {
            return (
                <div>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
                </div>
            )
        }
    }
    return (
        <nav>
            <div className='nav-wrapper'>
                <Link to="/" className='brand-logo left'>Home</Link>
                <ul className='right'>
                    {renderButtons()}
                </ul>

            </div>
        </nav>
    )
}

export default Header