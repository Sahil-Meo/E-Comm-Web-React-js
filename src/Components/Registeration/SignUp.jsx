import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ShortProfile from './ShortProfile'
import { useAppContext } from '../ContextApi/CartContext'

const SignUp = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isUserData, setIsUserData] = useState(true)
    const { setIsLoad, isLoad, userData, setUserData } = useAppContext()

    const handleLoginSubmit = () => {
        const payload = {
            email: email,
            password: password
        }

        const api = 'https://api.escuelajs.co/api/v1/auth/login'
        axios.post(api, payload)
            .then((res) => {
                console.log('Login Succesfully', res)
                const tokens = [res.data.access_token, res.data.refresh_token]
                localStorage.setItem('token', JSON.stringify(tokens))

                showUserData()

            })
            .catch((err) => {
                console.log('Login Failed', err)
            })
    }

    const showUserData = () => {
        const token = JSON.parse(localStorage.getItem('token'))
        const api = 'https://api.escuelajs.co/api/v1/auth/profile'


        const header = {
            headers: {
                Authorization: `Bearer ${token[0]}`
            }
        }

        axios.get(api, header)
            .then((res) => {
                setUserData(res.data)
                console.log(res.data)
                localStorage.setItem('user', JSON.stringify(res.data))
            })
            .catch((err) => {
                console.log("failed to get data", err)
            })
        setIsUserData(true)
        setIsLoad(false)

    }

    useEffect(() => {
        const loadData = async () => {
            const user = await JSON.parse(localStorage.getItem('user'))
            console.log(user)
            if (user?.id) {
                setUserData(user)
                setIsUserData(true)
            }
            else {
                setIsUserData(false)
            }
        }

        loadData()

    }, [isLoad])

    return (
        <div className="Register-container mt-8">
            <div className='register-form-img' style={{ backgroundImage: "url(https://img.freepik.com/premium-photo/empty-black-smartphone-with-cart-bags-light-background-online-shopping-purchase-concept-mock-up-3d-rendering_670147-9890.jpg?w=360)" }}>
            </div>
            <div className="signup-login">
                {isUserData && isUserData ? (<ShortProfile user={userData} />) : (
                    <>
                        <p className='signup-heading'>{!isLogin ? 'Create an account' : 'Log in to Exclusive'}</p>
                        <p className='sub-heading'>Enter your details below</p>
                        {isLogin === false ?


                            (
                                <form className='Signup'>
                                    <div className="input-fields">
                                        <input type="text" placeholder='Name' />
                                        <input type="email" placeholder='Email or Phone Number' />
                                        <input type="password" placeholder='Password' />
                                    </div>
                                    <button type='Submit' className="createAccount-Btn">Create Account</button>
                                </form>
                            )
                            :
                            (
                                <form onSubmit={(e) => {
                                    e.preventDefault()
                                    handleLoginSubmit()
                                }} className='Login'>
                                    <div className="input-fields">
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='john@mail.com' />
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='changeme' />
                                    </div>
                                    <div className="Login-btn">
                                        <button type='submit' className="Btn-large Login-Btn">Log in</button>
                                        <a className='' href="#">Forget Password?</a>
                                    </div>
                                </form>
                            )}


                        {!isLogin ? (
                            <div>
                                <div className="continue-with">
                                    <button className="createAccount-Btn">continue with google</button>
                                </div>
                                <div className="togglepage">
                                    <p>Already have an account? <a onClick={setIsLogin} href="#">Log in</a></p>
                                </div>
                            </div>
                        ) : ''}
                    </>
                )}
            </div>
        </div>
    )
}

export default SignUp
