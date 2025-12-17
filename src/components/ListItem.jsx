export default function ListItem( {text, completed, onToggle} ) {
    const handleCheckBoxChange = (e) => {
        e.stopPropagation(); // ✅ Mencegah double toggle
        onToggle();
    };

    return (
        <li
           className={`flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100 ${
        completed ? "line-through text-gray-500" : ""
      }`}
           onClick={onToggle}
        >
        <input
            type="checkbox"
            checked={completed}
            onChange={handleCheckBoxChange} // ✅ Gunakan handler baru
            className="accent-blue-600"
            style={{ marginRight: "8px" }}
        />
        <span onClick={onToggle}>{text}</span> {/* ✅ Pindah onClick ke span */}
        </li>
    );
}