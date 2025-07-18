import React from 'react'

const UserList = ({ users }) => {
    return (
        <div className=''>
            <div className='text-xl font-medium'>Recent users list</div>
            <div>
                <ul>
                    {
                        users && users.map(user => (
                            <li>{user}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default UserList