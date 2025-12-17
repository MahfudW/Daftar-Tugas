
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
        <form onSubmit={handleSubmit} className="flex gap-2 mb-2">
            <input
                type="text"

                id='todo-input' // ✅ Tambahkan id

                name='todo' // ✅ Tambahkan name

                placeholder='Tambahkan Tugas...'

                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline"

                value={inputValue}

                onChange={(e) => setInputValue(e.target.value)}
            />

            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
              >Tambah</button>
        </form>
    );
}

export default TodoForm;