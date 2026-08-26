function Dashboard({ applications }) {
    const total = applications.length
    const responded = applications.filter(app => app.status !== 'APPLIED').length
    const responseRate = total === 0 ? 0 : Math.round((responded / total) * 100)

    return (
        <div className = "bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Dashboard</h2>
            <div className="grid grid-cols-2 gap-4">
            <div className="mt-4">
                <p className="text-sm font-medium text-gray-600 mb-2">By Status</p>
                {['APPLIED', 'PHONE_SCREEN', 'INTERVIEW', 'OFFER', 'REJECTED'].map(status => {
                    const count = applications.filter(app => app.status === status).length
                    return (
                        <div key={status} className="flex justify-between text-sm py-1 border-b">
                            <span>{status.replace('_', ' ')}</span>
                            <span className="font-bold">{count}</span>
                        </div>
                    )
                })}
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Total Applications</p>
                <p className="text-3xl font-bold text-blue-600">{total}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Response Rate</p>
                <p className="text-3xl font-bold text-green-600">{responseRate}%</p>
            </div>
            </div>
        </div>
    )
}

export default Dashboard