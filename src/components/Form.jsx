import React, { useState } from 'react'

const Form = ({setList, setControl2}) => {
    const [user, setUser] = useState([]);

    const handleInput = () => {
        const inputName = event.target.name;
        setUser(prev => ({ ...prev, [inputName]: event.target.value }));
    }
    const handleSubmit = async () => {
        event.preventDefault();
        setList(prev => [ {...user}]);
        setControl2(false);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className='rounded border border-red-700 w-52 p-1 hover:border-red-900 outline-red-400' type="text" name='nombre' onChange={handleInput} value={user.nombre || ''} placeholder='Escribe tu primer nombre' />
            <input className='border p-2' type="submit" />
        </form>
    )
}

export default Form