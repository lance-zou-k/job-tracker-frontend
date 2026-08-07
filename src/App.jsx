import { useState } from 'react'
import ApplicationForm from './components/ApplicationForm'
import ApplicationTable from './components/ApplicationTable'

function App() {
  const [refreshKey, setRefreshKey] = useState(0)
  const triggerRefresh = () => setRefreshKey(refreshKey + 1)
return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Job Tracker</h1>
      <ApplicationForm onSubmitSuccess={triggerRefresh} />
      <ApplicationTable refreshKey={refreshKey} triggerRefresh={triggerRefresh}/>
    </div>
  )
}

export default App

