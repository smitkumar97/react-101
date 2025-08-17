import { Link } from "react-router-dom";

export default function PostItem({ post }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 p-5 flex flex-col justify-between">
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {post.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {post.content}
            </p>

            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Date: {post.date}</span>
                <div className="flex gap-3">
                    <Link
                        to={`/posts/${post.id}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        Read More →
                    </Link>
                    <Link
                        to={`/edit/${post.id}`}
                        className="text-green-600 dark:text-green-400 hover:underline"
                    >
                        Edit
                    </Link>
                </div>
            </div>
        </div>
    );
}
