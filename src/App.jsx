import { useState } from "react";
import Img from "./Component/img";
import Hero from "./Component/hero";

const App = () => {
  const [count, setcount] = useState(0);

  return (
    <div>
      <Img count={count} />
      <Hero count={count} setcount={setcount} />
    </div>
  );
};

export default App;
