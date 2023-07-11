import './style.scss'
import Logo from '../../assets/logo01.png'
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../context/authcontext';
import { useNavigate } from 'react-router-dom';
import { setItem, getItem } from '../../utils/storage';

function SignIn() {
    const navigate = useNavigate()
    const { login } = useContext(Authcontext)
    const [inputs, setInputs] = useState({
        email: "",
        senha: ""
    })

    const [message, setMessage] = useState('')

    const handleChange = e => {
        setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }))

    }

    const handleSubmit = async e => {
        e.preventDefault()
        if (!inputs.email || !inputs.senha) {
            return setMessage("Por favor preencha todos os campos.")
        }
        try {
            const response = await login(inputs)
            setMessage('Loading..')
            console.log(response)
        } catch (err) {
            return err
        }
    }

    useEffect(() => {
        const token = getItem('token')
        if (token) {
            navigate('/home')
        }
    })
    return (
        <div className='login'>
            <section className='left-container'>
                <div>
                    <h1>Hamburgueria CK</h1>
                    <p>Web website admins control panel</p>
                    <button className='btn'>Read More</button>
                </div>
            </section>
            <section className='right-container'>
                <div className="login-content">
                    <div className='hello-content'>
                        <h2>Hello Again!</h2>
                        <p>Welcome Back</p>
                    </div>

                    <form action="">
                        <div className="input-container">
                            <input type="email"
                                name='email'
                                placeholder='Email Address'
                                onChange={handleChange}
                            />
                            <AiOutlineMail RiLockPasswordFill className='input-icon-email' />
                            <input type="password"
                                name='senha'
                                placeholder='Password'
                                onChange={handleChange}
                            />
                            <RiLockPasswordFill className='input-icon-pw' />
                            <button className='btn btn-login' onClick={handleSubmit}>Login</button>
                            <p>{message}</p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default SignIn
