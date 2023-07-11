import { useEffect } from 'react'
import './home.scss'
import { useNavigate } from 'react-router-dom'
import { getItem } from '../../utils/storage'
function Home() {

    const navigate = useNavigate()
    const token = getItem('token' || null)

    return (
        <div>
            Home
        </div>
    )
}

export default Home
