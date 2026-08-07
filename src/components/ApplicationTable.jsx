import { useState, useEffect } from "react"
function ApplicationTable({ refreshKey , triggerRefresh}) {
  const [applications, setApplications] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/applications")
        .then(response => response.json())
        .then(data => setApplications(data))
  }, [refreshKey])
  const handleDelete = async(id) => {
      await fetch(`http://localhost:8080/applications/${id}`, {
        method: "DELETE"
      })
      triggerRefresh()
  }
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Applications List</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left text-sm font-medium text-gray-600 pb-3 border-b">Company</th>
            <th className="text-left text-sm font-medium text-gray-600 pb-3 border-b">Role</th>
            <th className="text-left text-sm font-medium text-gray-600 pb-3 border-b">Status</th>
            <th className="text-left text-sm font-medium text-gray-600 pb-3 border-b">Date Applied</th>
            <th className="text-left text-sm font-medium text-gray-600 pb-3 border-b">Notes</th>
            <th className="text-left text-sm font-medium text-gray-600 pb-3 border-b">Contact</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app.id}>
              <td className="py-3 text-sm text-gray-800 border-b">{app.companyName}</td>
              <td className="py-3 text-sm text-gray-800 border-b">{app.role}</td>
              <td className="py-3 text-sm text-gray-800 border-b">{app.status}</td>
              <td className="py-3 text-sm text-gray-800 border-b">{app.dateApplied}</td>
              <td className="py-3 text-sm text-gray-800 border-b">{app.notes}</td>
              <td className="py-3 text-sm text-gray-800 border-b">{app.contactName}</td>
              <td className="py-3 text-sm text-gray-800 border-b">
                  <button className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                  onClick={() => handleDelete(app.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ApplicationTable