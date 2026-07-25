import { useState, useEffect } from "react"
function ApplicationTable() {
  const [applications, setApplications] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/applications")
        .then(response => response.json())
        .then(data => setApplications(data))
  }, [])
  return (
    <div>
      <h2>Applications List</h2>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Status</th>
            <th>Date Applied</th>
            <th>Notes</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app.id}>
              <td>{app.companyName}</td>
              <td>{app.role}</td>
              <td>{app.status}</td>
              <td>{app.dateApplied}</td>
              <td>{app.notes}</td>
              <td>{app.contactName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ApplicationTable