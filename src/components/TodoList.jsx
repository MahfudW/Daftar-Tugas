import ListItem from "./ListItem";

function TodoList({ todos, onToggle }) {
    return (
        <ul className="space-y-2">
            {todos.map((todo, index) => (
                <ListItem
                    key={index}
                    text={todo.text}
                    completed={todo.completed}
                    onToggle={() => onToggle(index)}

                />
            ))}
        </ul>
    );
}

export default TodoList;