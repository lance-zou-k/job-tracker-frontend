import { useState } from 'react'
import ApplicationForm from './components/ApplicationForm'
import ApplicationTable from './components/ApplicationTable'

function App() {
  return (
    <div>
      <h1>Job Tracker</h1>
      <ApplicationForm />
      <ApplicationTable />
    </div>
  )
}

export default App