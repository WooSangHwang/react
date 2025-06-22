import "./Header.css";
import { memo } from "react";
const Header = () => {
  return (
    <div className={"Header"}>
      <h3>오늘은🥶 </h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// const memoziedHeader = memo(Header);
// export default memoziedHeader;
export default memo(Header);
