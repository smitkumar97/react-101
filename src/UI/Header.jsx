const Header = ({ title, subtitle }) => {
    return (
        <>
            <h1 className={`text-5xl font-black text-white ${subtitle ? 'mb-2' : 'mb-7'} text-center drop-shadow-2xl`}>
                <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent px-4 py-2 rounded-lg">
                    {title}
                </span>
            </h1>
            {subtitle ? (<h2 className="text-xl font-medium text-gray-600 italic text-center mb-7">
                {subtitle}
            </h2>) : (<></>)}
        </>
    )
}

export default Header