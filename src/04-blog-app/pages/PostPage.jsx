import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const PostDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [posts, setPosts] = useLocalStorage("posts", []);

    const post = posts.find((p) => p.id === id);

    if (!post) {
        return (
            <div className="max-w-2xl mx-auto p-6 text-center text-red-500">
                <h2 className="text-xl font-semibold">Post not found</h2>
                <button
                    onClick={() => navigate("/")}
                    className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                    Go Home
                </button>
            </div>
        );
    }

    const handleDelete = () => {
        const updatePosts = posts.filter((p) => p.id !== id);
        setPosts(updatePosts);
        navigate("/");
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                {post.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">{post.content}</p>
            <small className="block mb-6 text-gray-500 dark:text-gray-400">
                Date posted: {post.date}
            </small>

            <div className="flex space-x-4">
                <button
                    onClick={handleDelete}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    Delete Post
                </button>
                <button
                    onClick={() => navigate("/")}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    Go Home
                </button>
            </div>
        </div>
    );
};

export default PostDetails;
