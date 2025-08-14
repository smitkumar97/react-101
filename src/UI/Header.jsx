const Header = ({ title }) => {
    return (
        <h1 className="text-5xl font-black text-white mb-10 text-center drop-shadow-2xl">
            <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent px-4 py-2 rounded-lg">
                {title}
            </span>
        </h1>
    )
}

export default Header