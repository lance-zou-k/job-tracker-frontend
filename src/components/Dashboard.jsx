function Dashboard({ applications }) {
    const total = applications.length
    const responded = applications.filter(app => app.status !== 'APPLIED').length
    const responseRate = total === 0 ? 0 : Math.round((responded / total) * 100)

    return (
        <div className = "bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Dashboard</h2>
            <p>Total Applications: {total}</p>
            <p>Response Rate: {responseRate}%</p>
        </div>
    )
}

export default Dashboard