import "./Main.css";

//JSX 주의 사항
//1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
//2. 숫자, 문자열, 배열 값만 렌더링 된다.
//3. 모든 태그는 닫혀있어야 한다.
//4. 최상위 태그는 반드시 하나여만 한다.
// return (
//     <main>
//       <h1>main</h1>
//       <h2>{number}</h2>
//       <h2>{obj.a}</h2>
//       <h2>{[1, 2, 3]}</h2>
//     </main>
//   );

const Main = () => {
  const user = {
    user: "황우상",
    isLogin: false,
  };
  //   return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
  if (user.isLogin) {
    return <div style={{ backgroundColor: "red" }}>로그아웃</div>;
  } else {
    return <div className="logout">로그인</div>;
  }
};

export default Main;
