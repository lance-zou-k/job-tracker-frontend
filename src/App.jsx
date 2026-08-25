import { useState, useEffect } from 'react'
import ApplicationForm from './components/ApplicationForm'
import ApplicationTable from './components/ApplicationTable'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  const [refreshKey, setRefreshKey] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') !== null)
  const [applications, setApplications] = useState([])

  const triggerRefresh = () => setRefreshKey(refreshKey + 1)

  const fetchApplications = async() => {
      const token = localStorage.getItem('token')
      const response = await fetch("http://localhost:8080/applications", {
          headers: {
              "Authorization": `Bearer ${token}`
          }
      })
      const data = await response.json()
      setApplications(data)
  }

  useEffect(() => {
    if(isLoggedIn) {
      fetchApplications()
    }
  }, [isLoggedIn, refreshKey])
  
return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Job Tracker</h1>
      {isLoggedIn ? (
        
        <>
          <Dashboard applications={applications} />
          <ApplicationForm onSubmitSuccess={triggerRefresh} />
          <ApplicationTable applications={applications} triggerRefresh={triggerRefresh}/> 
          <button  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => {
            localStorage.clear()
            setIsLoggedIn(false)
          }}>Logout</button>       
        </>
      ) : (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </div>
  )
}

export default App

