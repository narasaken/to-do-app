import "./style.css";

export default function ToDo({filter, toggleCompleteTask, handleFilter, handleDeleteTask, handleRestoreTask}){

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
                    <button className="restore" onClick={() => handleRestoreTask(todo.id)}>&#8634;</button>
                    )}
                </div>
                ))
            ) : (
            <p>No tasks to show</p>
            )}
            </div>
            
        
            {/* <button onClick={() => handleDeleteTask(todo.id)} className="trashButton" style={{
                backgroundColor: isBtnClicked ? 'rgba(0, 0, 0, 0.16)' : 'rgba(0, 0, 0, 0.26)', 
                marginTop: 6,
                display: 'flex',
                alignItems: 'center',
                }}>
                <p style={{
                    fontSize: 28, 
                    paddingRight: 15, 
                    paddingLeft: 5, 
                    paddingTop: "70px",
                    }}>&#128465;</p>
                <p style={{
                    fontSize: 18, 
                    paddingTop: "76px",
                    }}>Move to Trash</p>
            </button>         */}
        </div> 
    );
}
  