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
    <div>

      <label>Company Name</label>
      <input
      value = {companyName}
      onChange = {(e) => setCompanyName(e.target.value)}
      />

      <lable>Role</lable>
      <input
      value = {role}
      onChange={(e) => setRole(e.target.value)}
      />

      <label>Status</label>
      <select 
      value={status}
      onChange={(e) => setStatus(e.target.value)}>
        <option value="APPLIED">Applied</option>
        <option value="PHONE_SCREEN">Phone Screen</option>
        <option value="INTERVIEW">Interview</option>
        <option value="OFFER">Offer</option>
        <option value="REJECTED">Rejected</option>
      </select>

      <label>Date Applied</label>
      <input type="date"
      value = {dateApplied}
      onChange={(e)=>setDateApplied(e.target.value)}
      />

      <label>Notes</label>
      <input
      value={notes}
      onChange={(e)=>setNotes(e.target.value)}
      />

      <label>Contact Name</label>
      <input
      value={contactName}
      onChange={(e)=>setContactName(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
      <h2>Add Application</h2>
    </div>
  )
}

export default ApplicationForm