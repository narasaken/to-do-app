import "./style.css";

export default function ToDo({handleDeleteForever, filter, toggleCompleteTask, handleFilter, handleDeleteTask, handleRestoreTask}){

    return ( 
        <div className="title">
            <h2>To Do</h2> 
            <hr />
            
            <div className='lists'>
                {handleFilter().length > 0 ? (
                handleFilter().map((todo) => (
                <div className="todo" key={todo.id}>
                    <input type="checkbox" checked={todo.isCompleted} onChange={() => toggleCompleteTask(todo.id)}/>
                    <span className={todo.isCompleted ? "completed-task" : ""}>{todo.task}</span>
                    {filter !== "Trash" ? (
                    <button className="delete" onClick={() => handleDeleteTask(todo.id)}>&#128465;</button>
                    ) : (
                    <>
                    <button className="restore" onClick={() => handleRestoreTask(todo.id)}>&#8634;</button>
                    <button className="delete-forever" onClick={()=>handleDeleteForever(todo.id)}>Delete Forever</button>
                    </>
                    )}
                </div>
                ))
            ) : (
            <p>No tasks to show</p>
            )}
            </div>
            
        </div> 
    );
}
  