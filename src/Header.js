import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="flex justify-center bg-gradient-to-r from-blue-400 to-blue-600 shadow-md p-4">
            <nav className="space-x-6 flex">
                <Link to="/todo-add">
                    <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-2xl shadow hover:bg-blue-100 transition">
                        Add
                    </button>
                </Link>

                <Link to="/todo-show">
                    <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-2xl shadow hover:bg-blue-100 transition">
                        Show
                    </button>
                </Link>

                <Link to="/todo-done">
                    <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-2xl shadow hover:bg-blue-100 transition">
                        Done
                    </button>
                </Link>
            </nav>
        </header>
    )
}

export default Header;
