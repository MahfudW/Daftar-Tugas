
import { useState } from 'react';

function TodoForm({ onAdd }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputValue.trim()) return;

        onAdd(inputValue);

        setInputValue('');

    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"

                id='todo-input' // ✅ Tambahkan id

                name='todo' // ✅ Tambahkan name

                placeholder='Tambahkan Tugas...'

                value={inputValue}

                onChange={(e) => setInputValue(e.target.value)}
            />

            <button type="submit" >Tambah</button>
        </form>
    );
}

export default TodoForm;