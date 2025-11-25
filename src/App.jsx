import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Nav from "./components/Nav";
import Users from "./pages/Users.jsx";
import User from "./components/User.jsx";



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users/:id" element={<Users />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
//   <div>
//     <h2>Finish FES</h2>
//     <button>Delete</button>
//   </div>
//   <div>
//     <h2>Finish the Interview section</h2>
//     <button>Delete</button>
//   </div>
//   <div>
//     <h2>Land a 100k Job</h2>
//     <button>Delete</button>
//   </div>
// </div>

// import "./App.css";
// import Todo from "./components/Todo.jsx";
// import Title from "./components/Title.jsx";
// import Modal from "./components/Modal.jsx";
// import React, {useState, useEffect} from 'react';
// import Counter from "./components/Counter.jsx"
// import Cart from "./components/Cart.jsx"
// function App() {

//   // return (<Counter />)

//   const [showModal, setShowModal] = useState(false);

//   function onTodoDelete(){
//     console.log('onTodoDelete() executed')
//     setShowModal(true)
//   }

//   function cancelAction() {
//     console.log('cancelAction() executed')
//     setShowModal(!true)
//   }
//   function confirmAction() {
//     console.log('confirmAction() executed')
//     setShowModal(!true)
//   }

//   useEffect(() =>{
//     console.log('ONLY on mount');
//   }, [])

//   useEffect(() =>{
//     console.log('on mount AND on {showModal} change');
//   }, [showModal])

//   useEffect(() =>{
//     console.log('EVERY render');
//   })

//   return (
//     <>
//       <Title />
//       <div>
//         <input type="text" onChange={(ev) =>{
//           console.log(ev.target.value);
//         }} />
//         <button onClick={() => {setShowModal(true)}}>Add Todo</button>
//       </div>
//       <div className="todo__wrapper">
//         <Todo
//         title="Finish  Frontend Simplified(FES)"
//         onTodoDelete={onTodoDelete}

//         />
//         <Todo
//         title="Finish the Interview section"
//         onTodoDelete={onTodoDelete}

//         />
//         <Todo
//         title="Land a $100k Job"
//         onTodoDelete={onTodoDelete}

//         />
//       </div>

//       {showModal && <Modal title="Are you sure you want to add?" cancelAction={cancelAction} confirmAction={confirmAction}/>}

//        {/* <Modal
//       title="Are you sure you want to delete?"
//       /> */}
//     </>
//   );
// }
