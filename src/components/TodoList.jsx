import ListItem from "./ListItem";

function TodoList({ todos }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <ListItem key={index} text={todo} />
            ))}
        </ul>
    );
}

export default TodoList;