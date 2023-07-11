import { Navigate, Outlet } from "react-router-dom"
import { getItem } from "../utils/storage"
import { useState } from "react"


function ProtectedRoute({ redirectTo }) {
    const token = getItem('token')
    return token ? <Outlet /> : <Navigate to={redirectTo} />
}

export default ProtectedRoute