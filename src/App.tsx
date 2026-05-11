import { Link, Route, Routes, useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate()
  return (
    <Routes>
      <Route path="/" element={<div>
        <h1>Home</h1>
        <Link to={"/dashboard"}>Dashboard</Link>
      </div>} />
      <Route path="/dashboard" element={<div>
        <h1>Dashboard</h1>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </div>} />
    </Routes>
  )
}

export default App
