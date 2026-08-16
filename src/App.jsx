import { useState } from 'react'
import ApplicationForm from './components/ApplicationForm'
import ApplicationTable from './components/ApplicationTable'
import Login from './components/Login'

function App() {
  const [refreshKey, setRefreshKey] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') !== null)
  const triggerRefresh = () => setRefreshKey(refreshKey + 1)
return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Job Tracker</h1>
      {isLoggedIn ? (
        <>
          <ApplicationForm onSubmitSuccess={triggerRefresh} />
          <ApplicationTable refreshKey={refreshKey} triggerRefresh={triggerRefresh}/>        
        </>
      ) : (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </div>
  )
}

export default App

