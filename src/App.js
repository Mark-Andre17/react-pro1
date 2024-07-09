import './App.css';
import React, { useState, useEffect } from'react';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos/';

    // вариант с async await
    
    async function getData(url) {
      const resopnse = await fetch(url);
      if (!resopnse.ok) {
        throw new Error(`HTTP error! status: ${resopnse.status}`);
      }
      const data = await resopnse.json();
      setTodos(data);
    }
    getData(url)

    // вариант с промесами

    // fetch(url)
    // .then((resopnse) => {
    //   if (!resopnse.ok) {
    //     throw new Error(`HTTP error! status: ${resopnse.status}`);
    //   }
    //   return resopnse.json();
    // })
    // .then((data) => {
    //   setTodos(data);
    // })
    // .catch((error) => {
    //   console.error('There has been a problem with your fetch operation:', error);
    // });
  }, [])

  return (
    <div className="App">
      {todos.map((item) => (
          <ul key={item.id}>
            <li>
              <p>{item.title}</p>
              <div>{item.completed === true ? '\u2705' : '\u274C'}</div>
            </li>
          </ul>
        ))}
    </div>
  );
}

export default App;
