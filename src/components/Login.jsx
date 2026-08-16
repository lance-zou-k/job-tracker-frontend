import { useState } from "react"

function Login({onLoginSuccess}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async() => {
        const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
        email: email,
        password: password
        }),
        })
        const token = await response.text()
        console.log(token)
        localStorage.setItem('token', token)
        onLoginSuccess()
    }
    return(
        <div className="bg-white rounded-lg shadow p-6 mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
            /> 

            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            value = {password}
            type = "password"
            onChange = {(e) => setPassword(e.target.value)}
            /> 

            <button  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login