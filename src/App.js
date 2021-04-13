import { useState } from "react";
import { Header } from "./components/header"
import { Layout } from "./components/layout"
import ellipseIcon from "../src/animateIcon/Ellipsis.svg";


function App() {
  const [ loading, setLoading ] = useState(<div className="text-center"><img className="mx-auto w-32 mt-56" src={ellipseIcon} alt=""/></div>)
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
