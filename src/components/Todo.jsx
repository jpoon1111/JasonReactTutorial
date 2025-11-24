import './Todo.css';

function Todo({title, onTodoDelete}) {
  
  function deleteTodo(id){
    console.log('Deleted Todo', title.toUpperCase());
  }



  return (
    <div className='todo'>
      <p>{title}</p>
      <button onClick={onTodoDelete}>Delete</button>
    </div>
    
  );
}

export default Todo;

// function Todo({title}) {
  
//   function deleteTodo(id){
//     console.log('Deleted Todo', title.toUpperCase());
//   }



//   return (
//     <div className='todo'>
//       <p>{title}</p>
//       <button onClick={() => deleteTodo(1)}>Delete</button>
//     </div>
    
//   );
// }
