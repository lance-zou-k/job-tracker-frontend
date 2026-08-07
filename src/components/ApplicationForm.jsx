import { useState } from "react"

function ApplicationForm({ onSubmitSuccess }) {
    const [companyName, setCompanyName] = useState('')
    const [role, setRole] = useState('')
    const [status, setStatus] = useState('')
    const [dateApplied, setDateApplied] = useState('')
    const [notes, setNotes] = useState('')
    const [contactName, setContactName] = useState('')

    const handleSubmit = async() => {
      const response = await fetch("http://localhost:8080/applications", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        companyName: companyName,
        role: role,
        status: status,
        dateApplied: dateApplied,
        notes: notes,
        contactName: contactName
        }),
      })
      const data = await response.json()
      console.log(data)
      onSubmitSuccess()
      setCompanyName('')
      setRole('')
      setStatus('')
      setDateApplied('')
      setNotes('')
      setContactName('')
    }
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Add Application</h2>

      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
      <input className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
      value = {companyName}
      onChange = {(e) => setCompanyName(e.target.value)}
      />

      <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
      <input className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
      value = {role}
      onChange={(e) => setRole(e.target.value)}
      />

      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
      <select className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
      value={status}
      onChange={(e) => setStatus(e.target.value)}>
        <option value="APPLIED">Applied</option>
        <option value="PHONE_SCREEN">Phone Screen</option>
        <option value="INTERVIEW">Interview</option>
        <option value="OFFER">Offer</option>
        <option value="REJECTED">Rejected</option>
      </select>

      <label className="block text-sm font-medium text-gray-700 mb-1">Date Applied</label>
      <input  className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
      type="date"
      value = {dateApplied}
      onChange={(e)=>setDateApplied(e.target.value)}
      />

      <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
      <input className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
      value={notes}
      onChange={(e)=>setNotes(e.target.value)}
      />

      <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name</label>
      <input className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
      value={contactName}
      onChange={(e)=>setContactName(e.target.value)}
      />

      <button  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default ApplicationForm