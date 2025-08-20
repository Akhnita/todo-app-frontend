import { useState } from 'react'
import { callCreateAPI, callGetAllAPI } from "./BackendAPI"

function AddTodoPage(props) {
    let todo = props.todo;
    let setTodo = props.setTodo;

    let [formData, setFormData] = useState({
        todoTitle: '',
        dueDate: '',
        status: 'pending'
    })

    function handleChange(e) {
        let inputName = e.target.name;
        let inputValue = e.target.value;

        setFormData(prev => ({
            ...prev,
            [inputName]: inputValue
        }))
    }

    async function handleSubmit(e) {
        // preventDefault function prevent website from reload, because reloaded our state go into default values
        e.preventDefault();

        // stringify is function JSON file which take parameter as object/json and return string of it
        alert("form submitted, data = " + JSON.stringify(formData))

        let newTodo = {
            todoId: Date.now().toString(),
            todoTitle: formData.todoTitle,
            dueDate: formData.dueDate,
            status: 'pending'
        }
        await callCreateAPI('/create-todo', newTodo)

        //get our todo again
        const todoList = await callGetAllAPI('/read-todos');
        setTodo(todoList);
    }


    return (
        <div className="bg-pink-200 min-h-[200px] flex justify-center items-center p-6">
  <form
    onSubmit={(e) => handleSubmit(e)}
    className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md space-y-4"
  >
    {/* Todo Title */}
    <div className="flex flex-col space-y-2">
      <label className="text-gray-700 font-medium">Todo Title</label>
      <input
        type="text"
        placeholder="Enter your todo title"
        name="todoTitle"
        value={formData.todoTitle}
        onChange={(e) => handleChange(e)}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
      />
    </div>

    {/* Due Date */}
    <div className="flex flex-col space-y-2">
      <label className="text-gray-700 font-medium">Due Date</label>
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={(e) => handleChange(e)}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-pink-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-pink-600 transition duration-300"
    >
      Submit
    </button>
  </form>
</div>

    )
}

export default AddTodoPage;