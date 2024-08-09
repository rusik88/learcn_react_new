import { useState } from 'react';

function UserForm({ onUserAdd }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        onUserAdd({ name, email });
    };

    return (
        <form className="userForm" onSubmit={handleSubmit}>
            <div>
                <label></label>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            </div>
            <div>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
            <button>Add User</button>
        </form>
    );
}

export default UserForm;
