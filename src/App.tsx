import React, {useEffect, useState} from 'react';
import './App.css';

type PropsType = {
    body: string
    id: number
    title: string
    userId: number
}

function App() {
    const [state, setState] = useState<PropsType[]>([])

    console.log(state)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setState(json))
    }, [])

    const deleteHandler = () => {
      setState([])
    }

    const showPostHandler = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setState(json))
    }

    return (
        <div className="App">
            <button onClick={deleteHandler}>DELETE</button>
            <button onClick={showPostHandler}>SHOW POSTS</button>
            {state.map((el) => {
                return (
                    <ul>
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.userId}</span>
                            <span>{el.body}</span>
                        </li>
                    </ul>
                )
            })}
        </div>
    );
}


export default App;
