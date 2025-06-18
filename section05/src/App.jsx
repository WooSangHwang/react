import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { useState } from "react";

//부모 컨포넌트
function App() {
  //components
  // return (
  //   <>
  //     <Header />
  //     <Main />
  //     <Footer />
  //   </>
  // );
  //props
  // const buttonProps = {
  //   text: "메일",
  //   color: "red",
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // };
  // return (
  //   <>
  //     <Button {...buttonProps} />
  //     <Button text={"카페"} />
  //     <Button text={"블로그"}>
  //       <div>안녕하세요</div>
  //     </Button>
  //   </>
  // );

  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  // console.log(count);

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          전구 {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
}

export default App;
