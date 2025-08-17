import React, { useState } from 'react'
import Header from './Header'
import LoginForm from './LoginForm'
import GreetingBox from './GreetingBox';
import UserList from './UserList';

const UserGreetingApp = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState(['John', 'Sarah', 'Alex']);

    function handleLogin(username) {
        setCurrentUser(username);
        if (!users.includes(username)) {
            setUsers([...users, username])
        }
    }

    function handleLogout() {
        setCurrentUser(null)
    }

    return (
        <>
            <Header />
            <div className='flex justify-center mb-2'>
                {
                    !currentUser ? (

                        <LoginForm onLogin={handleLogin} />
                    ) : (

                        <GreetingBox name={currentUser} onLogout={handleLogout} />
                    )
                }
            </div>
            <div className='flex justify-center mt-2'>
                <UserList users={users} />
            </div>
        </>
    )
}

export default UserGreetingApp