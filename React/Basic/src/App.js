import React, {useState} from "react";

function markDone(list, index) {
    return list.map((item, i) => (i === index ? { ...item, done: true } : item));
}
function FilterButton({ current, flag, setFilter, children }) {
    const style = {
        border: "1px solid dimgray",
        background: current === flag ? "dimgray" : "transparent",
        color: current === flag ? "white" : "dimgray",
        padding: "4px 10px",
    };
    return (
        <button style={style} onClick={() => setFilter(flag)}>
            {children}
        </button>
    );
}
function Task({ task, done, markDone }) {
    const paragraphStyle = {
        color: done ? "gray" : "black",
        borderLeft: "2px solid",
    };
    const buttonStyle = {
        border: "none",
        background: "transparent",
        display: "inline",
        color: "inherit",
    };
    return (
        <p style={paragraphStyle}>
            <button style={buttonStyle} onClick={done ? null : markDone}>
                {done ? "✓ " : "◯ "}
            </button>
            {task}
        </p>
    );
}
function TodoApplication({ initialList }) {
    const [todos, setTodos] = useState(initialList);
    const [hideDone, setHideDone] = useState(false);
    const filteredTodos = hideDone ? todos.filter(({ done }) => !done) : todos;
    return (
        <main>
            <div style={{ display: "flex" }}>
                <FilterButton current={hideDone} flag={false} setFilter={setHideDone}>
                    Show all
                </FilterButton>
                <FilterButton current={hideDone} flag={true} setFilter={setHideDone}>
                    Hide done
                </FilterButton>
            </div>
            {filteredTodos.map((todo, index) => (
                <Task
                    key={todo.task}
                    task={todo.task}
                    done={todo.done}
                    markDone={() => setTodos((value) => markDone(value, todo.index))}
                />
            ))}
        </main>
    );
}
function App() {
    const items = [
        { task: "Feed the plants", done: false, index: 0 },
        { task: "Water the dishes", done: false, index: 1 },
        { task: "Clean the cat", done: false, index: 2 },
    ];
    return <TodoApplication initialList={items} />;
}
// --------------아래의 코드는 뭔가 문제가 있음
// function markDone(list, index) {
//     return list.map(
//         (item, i) => (i === index ? {...item, done: true} : item)
//     );
// }
//
// function FilterButton(
//     {current, flag, setFilter, children}
// ) {
//     const style = {
//         border: "1px solid dimgray",
//         backgroundColor: current === flag ? "dimgray" : "transparent",
//         color: current === flag ? "white" : "dimgray",
//         padding: "4px 10px",
//     };
//     return (
//         <button
//             style={style}
//             onClick={() => setFilter(flag)}
//         >
//             {children}
//         </button>
//     );
// }
//
// function Task({task, done, markDone}) {
//     const paragraphStyle = {
//         color: done ? "gray" : "black",
//         borderLeft: "2px solid",
//     };
//     const buttonStyle = {
//         border: "none",
//         backgroundColor: "transparent",
//         display: "inline",
//         color: "inherit",
//     };
//     return (
//         <p style={paragraphStyle}>
//             <button
//                 style={buttonStyle}
//                 onClick={done ? null : markDone}
//             >
//                 {done ? "o" : "x"}
//             </button>
//             {task}
//         </p>
//     );
// }
//
// function TodoApplication({initialList}) {
//     const [todos, setTodos] = useState(initialList);
//     const [hideDone, setHideDone] = useState(false);
//     const filteredTodos = hideDone
//         ? todos.filter(({done}) => !done)
//         : todos;
//     return (
//         <main>
//             <div style={{display: "flex"}}>
//                 <FilterButton
//                     current={hideDone}
//                     flag={false}
//                     setFilter={setHideDone}
//                 >
//                     show all
//                 </FilterButton>
//                 <FilterButton
//                     current={hideDone}
//                     flag={true}
//                     setFilter={setHideDone}>
//                     Hide done
//                 </FilterButton>
//             </div>
//             {filteredTodos;.map((todo, index)=> (
//                 <Task
//                 key={todo.task}
//             task={todo.task}
//             done={todo.done}
//             markDone={() => setTodos((value) =>
//                 markDone(value, todo.index)
//             )}
//         />
//
//     )
// )}
// </main>
// )
//     ;
// }
// ---------------------------
// function markDone(list, index) {
//     return list.map(
//         (item, i) => (i === index ? {...item, done: true} : item)
//     );
// }
//
// function TodoApplication({initialList}) {
//     const [todos, setTodos] = useState(initialList);
//     const [hideDone, setHideDone] = useState(false);
//     const filteredTodos = hideDone
//         ? todos.filter(({done}) => !done)
//         : todos;
//     return (
//         <main>
//             <div style={{display: "flex"}}>
//                 <button onClick={() => setHideDone(false)}>
//                     show all
//                 </button>
//                 <button onClick={() => setHideDone(true)}>
//                     Hide done
//                 </button>
//             </div>
//             {filteredTodos.map((todo, index) => (
//                 <p key={todo.task}>
//                     {todo.done ? (
//                         <strike>{todo.task}</strike>
//                     ) : (
//                         <>
//                             {todo.task}
//                             <button onClick={() => setTodos((value) =>
//                                 markDone(value, index)
//                             )}
//                             >
//                                 x
//                             </button>
//                         </>
//                     )}
//                 </p>
//             ))}
//         </main>
//     );
// }
//
// function App() {
//     const items = [
//         {task: "Feed the plants", done: false, index: 0},
//         {task: "water", done: false, index: 1},
//         {task: "Clean", done: false, index: 2},
//     ];
//     return <TodoApplication initialList={items}/>
// }

// function TodoApplication({initalList}){
//     const [todos, setTodos] = useState(initalList);
//     return (
//         <main>
//             {todos.map((todo, index)=>(
//                 <p key={todo}>
//                     {todo}
//                     <button
//                         onClick={()=>{
//                             setTodos((value)=>[
//                                 ...value.slice(0, index),
//                                 ...value.slice(index + 1),
//                             ]);
//                         }}
//                     >
//                         x
//                     </button>
//                 </p>
//             ))}
//         </main>
//     );
// }
// function App(){
//     const items = [
//         "Feed the plants",
//         "Water the dishes",
//         "Clean the cat"
//     ];
//     return<TodoApplication initalList={items} />;
// }


// const   PLUS = (a,b) => a + b;
// const MINUS = (a,b) => a - b;
// const  MULTIPLY = (a,b) => a * b;
//
// function Calculator({a, b}) {
//     const [operator, setOperator] = useState(() => PLUS);
//     return(
//         <main>
//             <h1>Calculator</h1>
//             <button
//                 onClick={() => setOperator(null)}
//             >
//                 RESET
//             </button>
//             <button
//                 onClick={() => setOperator(() => PLUS)}
//             >
//                 PLUS
//             </button>
//             <button
//                 onClick={() => setOperator(() => MINUS)}
//             >
//                 MINUS
//             </button>
//             <button
//                 onClick={() => setOperator(() => MULTIPLY)}
//             >
//                 MULTIPLY
//             </button>
//             <p>
//                 Result of applying operator to {a} and {b}:
//                 <code>{operator ? operator(a, b) : 0}</code>
//             </p>
//         </main>
//     );
// }
//
// function App() {
//     return <Calculator a={7} b={4}/>
// }

// function Accordion() {
//     const [isExpanded, setIsExpanded] = useState(false);
//     return (
//         <main>
//             <h2 style={{display: "flex", gap: "6px"}}>
//                 Secret password
//                 <button onClick={() => setIsExpanded(false)}>
//                     -
//                 </button>
//                 <button onClick={() => setIsExpanded(true)}>
//                     +
//                 </button>
//             </h2>
//             {isExpanded && (
//                 <p>
//                     password: <code>hunter2</code>
//                 </p>
//             )}
//         </main>
//     );
// }
// function App(){
//     return<Accordion />
// }


// function Counter({start}) {
//     const [counter, setCounter] = useState(null);
//     return (
//         <main>
//             <p>Counter: {counter}</p>
//             <button onClick={() => setCounter("hi there")}>
//                 Increment
//             </button>
//         </main>
//     );
// }
// function App(){
//     return (
//         <>
//             <Counter start={0}/>
//             <Counter start={123}/>
//             <Counter start={-64}/>
//         </>
//     );
// }


/*
        function Counter() {
                               const [counter, setCounter] = useState(0);
                               return (
                               <main>
                               <p>Counter: {counter}</p>
    <button onClick={() => setCounter((value) => value + 1)}>
        Increment
      </button>
    </main>
  );
}
*/

export default App;
