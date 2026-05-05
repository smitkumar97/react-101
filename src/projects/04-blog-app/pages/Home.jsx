import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import useLocalStorage from "../hooks/useLocalStorage";

const Home = () => {
    const [posts, setPosts] = useLocalStorage("posts", []);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (posts.length === 0) {
            fetch("https://dummyjson.com/posts")
                .then((res) => res.json())
                .then((data) => {
                    const formattedPosts = data.posts.map((post) => ({
                        id: String(post.id),
                        title: post.title,
                        content: post.body,
                        date: new Date().toLocaleDateString("en-GB"),
                    }));
                    setPosts(formattedPosts);
                    setLoading(false);
                })
        }
    });

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                All Posts
            </h1>

            {loading ? (
                <p className="text-gray-500 dark:text-gray-400">Loading posts...</p>
            ) : (
                <PostList posts={posts} />
            )}
        </div>
    );
};

export default Home;
