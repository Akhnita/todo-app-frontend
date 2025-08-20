import { callGetAllAPI, callUpdateAPI } from"./BackendAPI"

function ShowTodoPage(props) {
    let todoArr = props.todo;
    console.log(JSON.stringify(todoArr))

    async function handleClick(e, todoId) {
         await callUpdateAPI(
            '/update-todo', 
            {status: 'completed', completionDate: new Date() },
            { 'todoId': todoId }
        )

         let todoList = await callGetAllAPI('/read-todos');
        props.setTodo(todoList);
    }

    return (
        <div className="bg-purple-100 min-h-[250px] flex justify-center items-center p-6">
            <div className="overflow-x-auto w-full max-w-4xl shadow-lg rounded-lg bg-white">
                <table className="w-full border-collapse text-center">
                    <thead className="bg-purple-300 text-gray-800">
                        <tr>
                            <th className="px-4 py-2">Todo Title</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Due Date</th>
                            <th className="px-4 py-2">Mark Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoArr.map((todo) =>
                            todo.status === "pending" && (
                                <tr key={todo.todoId} className="hover:bg-purple-50 transition">
                                    <td className="px-4 py-2">{todo.todoTitle}</td>
                                    <td className="px-4 py-2">{todo.status}</td>
                                    <td className="px-4 py-2">{todo.dueDate}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            onClick={(e) => handleClick(e, todo.todoId)}
                                            className="px-3 py-1 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                                        >
                                            ✅
                                        </button>
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

export default ShowTodoPage;
