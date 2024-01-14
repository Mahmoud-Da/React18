import Login from "./components/Login/Login";
function App() {
  const handleLogin = (email: string, password: string) => {
    console.log("Logged in email address", email, "and password:", password);
  };
  return (
    <>
      <Login onSubmit={handleLogin} />
    </>
  );
}

export default App;
