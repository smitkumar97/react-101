import PostItem from "./PostItem";

export default function PostList({ posts }) {
    if (!posts || posts.length === 0) {
        return (
            <p className="text-gray-500 dark:text-gray-400 text-center mt-10">
                No posts yet. Start writing!
            </p>
        );
    }

    return (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
}
