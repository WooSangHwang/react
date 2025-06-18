const Button = ({ children, text, color = "black" }) => {
  console.log(text);
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    <button
      //   onClick={() => {
      //     console.log(text);
      //   }}
      onClick={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
