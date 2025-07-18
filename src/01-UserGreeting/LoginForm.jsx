import { useState } from 'react';

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            onLogin(username.trim());
            setUsername('');
        }
    };

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit} className='flex flex-col flex-start'>
                <input className='border' type="text" name="name" value={username} onChange={(e) => setUsername(e.target.value)}
                    placeholder='Enter your name' required
                />
                <button class="mt-2 bg-sky-500 hover:bg-sky-700 ..." type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LoginForm;