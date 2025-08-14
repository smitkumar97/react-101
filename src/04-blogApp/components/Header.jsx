import { Link, NavLink } from "react-router-dom";
import ThemeToggle from './ThemeToggle';

export default function Header() {
    const linkClasses =
        "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800";

    return (
        <nav className="flex items-center justify-between h-16">
            <Link
                to="/"
                className="text-xl font-bold tracking-tight hover:opacity-80 transition"
            >
                MyBlog
            </Link>

            <div className="flex gap-2">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `${linkClasses} ${isActive ? "bg-gray-200 dark:bg-gray-700" : ""}`
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/create"
                    className={({ isActive }) =>
                        `${linkClasses} ${isActive ? "bg-gray-200 dark:bg-gray-700" : ""}`
                    }
                >
                    Create Post
                </NavLink>
            </div>

            <ThemeToggle />
        </nav>
    );
}
