import Routes from "./Routes.tsx";

function App() {
  return (
    <>
      <h3>Routes</h3>
      <nav>
        <a href="/">Home</a>
        <a href="/signup">Signup</a>
        <a href="/login">Login</a>
      </nav>
      <Routes />
    </>
  )
}

export default App
