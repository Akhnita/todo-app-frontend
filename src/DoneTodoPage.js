function DoneTodoPage(props) {
    let todoArr = props.todo;

    return (
        <div className="bg-purple-100 min-h-[250px] flex justify-center items-center p-6">
            <div className="overflow-x-auto w-full max-w-4xl shadow-lg rounded-lg bg-white">
                <table className="w-full border-collapse text-center">
                    <thead className="bg-green-300 text-gray-800">
                        <tr>
                            <th className="px-4 py-2">Todo Title</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Completed Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoArr.map((todo) =>
                            todo.status === "completed" && (
                                <tr key={todo.id} className="hover:bg-green-50 transition">
                                    <td className="px-4 py-2 font-medium text-gray-700">{todo.todoTitle}</td>
                                    <td className="px-4 py-2 text-green-600 font-semibold capitalize">{todo.status}</td>
                                    <td className="px-4 py-2 text-gray-600">
                                        {todo.completedDate?.toLocaleDateString()}
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DoneTodoPage;
