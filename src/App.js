import Add from "./components/Add";
import Greetings from "./components/Greetings";

import {Fragment, useEffect, useReducer, useRef} from "react";
import User from "./components/User";
//import "./static/index.css"
import { useState, createContext } from "react";
import ContextComponent from "./components/ContextComponent";
import useFetch from "./components/useFetch";

/*
function App() {
  return <Fragment>
    <Add></Add>
    <Greetings></Greetings>
  </Fragment>;
}*/

/*
function App() {
  const myName= "Can";
  const multiply = (a, b) => a * b;
  const specialClass = "simple-class";
  return (
      <>
        <h1>{myName}</h1>
          <p>2 + 2 = {2 + 2}</p>
          <p>My Friends List: {["Alex", "John", "Jordan"]}</p>
          <p>4 * 4 = {multiply(4, 4)}</p>
          <p className={specialClass}>This is a special class.</p>

      </>
  );
}
*/
/*
function App() {
    const userInfo = [
        {
            username: "Can",
            email: "test@gmail.com",
            location: "TR"
        },
        {
            username: "Hazal",
            email: "testhazal@gmail.com",
            location: "TR"
        },
        {
            username: "Ekrem",
            email: "testekrem@gmail.com",
            location: "TR"
        },
    ]
    return(
        <>
            {userInfo.map(user => (
                <ul key={Math.random() * 10}>
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>{user.location}</li>
                </ul>
            ))}
        </>
    )
}*/

/*
function App() {
    return (
        <>
            <User
            img={"https://avatars.githubusercontent.com/u/43791867?v=4"}
            name={"Can Savcı"}
            age={18}
            hobbies={["Coding", "Writing Poems", "Reading"]}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum repudiandae sapiente voluptatibus. Animi aperiam ea esse magni minima recusandae repellat, reprehenderit saepe. Ab, dolorem esse illum neque nihil provident ratione?</p>
            </User>
        </>
    )
}*/

/*
const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword = () => <h1>Invalid Password</h1>

const Password = ({isValid}) => {
    if (isValid) {
        return <ValidPassword/>;
    }
    return <InvalidPassword/>;
}

function App() {
    return (
        <>
            <Password isValid={true}/>
        </>
    )
}
*/
/*
const Cart = () => {
    const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoodies"]
    return (<>
    <h1>Cart </h1>
            {items.length > 0 && <h2>You have {items.length} items in your cart.</h2>}
        <ul>
            <h4>Products</h4>
            {items.map((item) => (
                <li key={Math.random()}>{item}</li>
            ))}
        </ul>
    </>
    );
}

function App() {
    return (
        <>
            <Cart/>
        </>
    )
}
*/
// tailwindcss
// react-icon


/*

const Button = () => {
    const handleClick = () => {
        console.log("Clicked");
    }
    return <button onClick={handleClick}>Click</button>;
}

function App() {
    return (
        <>
        <Button/>
        </>
    )
}

*/

// State and Hooks
/*

const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementHandler = () => {
      setCount(count + 1);
    }
    const decrementHandler = () => {
        setCount(count - 1);
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={incrementHandler}>+</button>
            <button onClick={decrementHandler}>-</button>
        </>
    )
}

function App() {
    return (
        <>
            <Counter/>
        </>
    )
}
*/
/*

function App() {
    const [username, setUsername] = useState("");
    const handleChange = (event) => {
        setUsername(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`You typed ${username}`);
        setUsername("");
    }

    return (
        <>
        <h1>Form Demo</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </>
    )
}
*/

/*
function App() {
    const [value, setValue] = useState(0);
    // Render for the first time
    // Anytime we do side effect
    // Dependency List
    useEffect(() => {
        console.log("Hello App!");
        document.title = `Increment (${value})`;
    }, [value]);
    return (
        <>
            <h1>{value}</h1>
            <button onClick={() => setValue(value + 1)}>Click Me!</button>
        </>
    )
}
*/
/*
function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            if (data && data.length) setData(data);
        }
        getData().catch((error) => console.log(error));
    }, []);

    return (
        <>
        <ul>
            {data.map((item) => (
                <li key={Math.random()}>{item.title}</li>
            ))}
        </ul>
        </>
    );
}
*/
/*
// Context API & useContext
export const Data = createContext();
export const AgeData = createContext();

function App() {
    const name = "Can Savcı";
    const age = 28;
    return (
        <>
            <Data.Provider value={name}>
                <AgeData.Provider value={age}>
                    <ContextComponent/>
                </AgeData.Provider>
            </Data.Provider>
        </>
    )
}
*/
/*
// useReducer Hook
const initialState = {count: 0}
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + 1
            };
        case "decrement":
            return {
                ...state,
                count: state.count - 1
            };
        case "reset":
            return {
                ...state,
                count: 0
            };
        default:
            return state;
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({type: "increment"})}>+</button>
            <button onClick={() => dispatch({type: "decrement"})}>-</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        </>
    )
}
*/
/*

// useRef Hook
function App() {
    const inputElement = useRef(null);
    const focusInput = () => {
      inputElement.current.focus()
      inputElement.current.value = "Can";
    }

    return (
        <>
            <input type="text" ref={inputElement}/>
            <button onClick={() => focusInput()}>Focus & Write Can</button>
        </>
    )
}
*/

// Custom Hooks
function App() {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
    return (
        <>
            {data && data.map((item) => {
                return <p key={item.id}>{item.title}</p>
            })}
        </>
    );
}
export default App;