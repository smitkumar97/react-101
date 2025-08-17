import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

export default function EditPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [posts, setPosts] = useLocalStorage("posts", []);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const existingPost = posts.find(p => p.id === id);
        if (!existingPost) {
            navigate("/");
            return;
        }
        setTitle(existingPost.title);
        setContent(existingPost.content);
    }, [id, posts, navigate]);

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) {
            setError("Both fields are required!");
            return;
        }

        const updatedPosts = posts.map(p =>
            p.id === id ? { ...p, title: title.trim(), content: content.trim() } : p
        );

        setPosts(updatedPosts);
        navigate("/");
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                Create a New Post
            </h1>

            {error && <p className="mb-4 text-red-500">{error}</p>}

            <form onSubmit={handleUpdate} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Title
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        placeholder="Enter your post title"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Content
                    </label>
                    <textarea
                        rows="5"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        placeholder="Write your blog post..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Update Post
                </button>
            </form>
        </div>
    );
}
