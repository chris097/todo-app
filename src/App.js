import { useState } from "react";
import { Header } from "./components/header"
import { Layout } from "./components/layout"


function App() {
  const [ loading, setLoading ] = useState("Loading ...")
  setTimeout(() => {
    setLoading(
      <>
      <Header />
      <Layout />
      </>
    )
  }, 2000);
  return (
     <>
       {loading}
     </>
  );
}

export default App;
