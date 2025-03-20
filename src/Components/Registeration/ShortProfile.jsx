import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../ContextApi/CartContext'
const ShortProfile = ({ user }) => {
    const navigate = useNavigate()
    const { setIsLoad } = useAppContext()

    const handleLogout = () => {
        localStorage.removeItem('user')
        setIsLoad(true)
    }

    return (
        <div className='rgisterUserCard'>
            <img src={user?.avatar} alt="" />
            <p className="userName"> Well Come: <span>{user?.name || 'N/A'}</span> </p>
            <p className="userRole"> Your Role: <span>{user?.role || 'N/A'}</span></p>
            <div className="button">
                <button onClick={() => navigate('/profile')} className="Btn">Edit Profile</button>
                <button onClick={handleLogout} className="Logout">Logout</button>
            </div>
        </div>
    )
}

export default ShortProfile
