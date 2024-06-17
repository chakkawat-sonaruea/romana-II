// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useForm } from "react-hook-form";


function App() {
  const { register, handleSubmit } = useForm();

  return (
    <>
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Firstname</label>
          <input {...register("firstname")}
            required
            minLength="3"
            type="text"
            placeholder="firstname"
          ></input>
        </div>
        <div>
          <label>Lastname</label>
          <input {...register("lastname")}
            required
            minLength="3"
            type="text"
            placeholder="lastname"
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input {...register("email")}
          required
          type="email"
          placeholder="example@email.com"
          ></input>
        </div>
        <div>
          <label>Username</label>
          <input {...register("username")}
            required
            minLength="3"
            type="text"
            placeholder="username"
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input {...register("password")}
            required
            minLength="4"
            maxLength="16"
            type="password"
            placeholder="password"
          ></input>
        </div>
        <ul>
          <li>
            <input {...register("react")} type="checkbox" name="React" />
            <label htmlFor="React">React</label>
          </li>
          <li>
            <input {...register("nextjs")} type="checkbox" name="Next.js" />
            <label htmlFor="Next.js">Next.js</label>
          </li>
          <li>
            <input {...register("laravel")} type="checkbox" name="Laravel" />
            <label htmlFor="Laravel">Laravel</label>
          </li>
          <li>
            <input {...register("graphql")} type="checkbox" name="GraphQL" />
            <label htmlFor="GraphQL">GraphQL</label>
          </li>
          <li>
            <input {...register("nestjs")} type="checkbox" name="Nest.js" />
            <label htmlFor="Nest.js">Nest.js</label>
          </li>
        </ul>
        <button type="submit">Submit</button>
      </form>
    </main>
    </>
  )
}

function onSubmit(data) {
  console.log(data);
}

export default App