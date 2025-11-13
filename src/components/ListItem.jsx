export default function ListItem( {text, completed, onToggle} ) {
    const handleCheckBoxChange = (e) => {
        e.stopPropagation(); // ✅ Mencegah double toggle
        onToggle();
    };

    return (
        <li
           onClick={onToggle}
           style={{
                cursor: "pointer",
                textDecoration: completed ? "line-through" : "none",
              }}
        >
        <input
            type="checkbox"
            checked={completed}
            onChange={handleCheckBoxChange} // ✅ Gunakan handler baru
            style={{ marginRight: "8px" }}
        />
        <span onClick={onToggle}>{text}</span> {/* ✅ Pindah onClick ke span */}
        </li>
    );
}