import React from 'react'

const GreetingBox = ({ name, onLogout }) => {
    return (
        <>
            <div className='flex flex-col'>
                <div>Hello {name}</div>
                <button class="mt-2 bg-sky-500 hover:bg-sky-700 ..." type="submit" onClick={onLogout}>Logout</button>
            </div>
        </>
    )
}

export default GreetingBox