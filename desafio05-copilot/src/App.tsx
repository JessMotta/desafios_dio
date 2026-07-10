import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/User";
import Todo from "./components/Todo";

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<User />} />
        <Route path="/todos/:id" element={<Todo />} />
      </Routes>

    </BrowserRouter>
  )
}

