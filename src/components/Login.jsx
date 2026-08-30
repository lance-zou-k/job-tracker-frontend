import { useState } from "react"

function Login({onLoginSuccess}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)

    const handleRegister = async() =>{
        const response = await fetch("https://job-tracker-production-87db.up.railway.app/auth/register", {
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
        alert('Registered successfully! Please log in.')
        setIsRegistering(false)
    }

    const handleLogin = async() => {
        const response = await fetch("https://job-tracker-production-87db.up.railway.app/auth/login", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                email: email,
                password: password
            }),
        })
        if(response.ok){
            const token = await response.text()
            console.log(token)
            localStorage.setItem('token', token)
            onLoginSuccess()
        } else {
            alert('Invalid email or password.')
        }

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

            <button onClick={isRegistering ? handleRegister : handleLogin}>
                {isRegistering ? 'Register' : 'Login'}
            </button>
            <p onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? 'Already have an account? Login' : 'No account? Register'}
            </p>
        </div>
    )
}

export default Login