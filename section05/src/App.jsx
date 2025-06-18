import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

//부모 컨포넌트
function App() {
  // return (
  //   <>
  //     <Header />
  //     <Main />
  //     <Footer />
  //   </>
  // );
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>안녕하세요</div>
      </Button>
    </>
  );
}

export default App;
