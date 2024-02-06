import Home from "./pages/Home/Home";

function App() {
  console.log("key is", import.meta.env.NEXT_PUBLIC_apiKey);
  return (
    <>
      <Home></Home>
    </>
  );
}

export default App;
