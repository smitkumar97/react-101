import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 dark:text-white"
        >
            {theme === "light" ? "🌞 Light" : "🌙 Dark"}
        </button>
    );
}
