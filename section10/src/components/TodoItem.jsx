import "./TodoItem.css";
import { memo } from "react";
const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDeleteButton = () => {
    onDelete(id);
  };
  return (
    <div className={"TodoItem"}>
      <input
        readOnly
        type="checkbox"
        checked={isDone}
        onChange={onChangeCheckbox}
      />
      <div className={"content"}>{content}</div>
      <div className={"date"}>{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

//고차 컴포넌트 (higher order component) HOC
// export default memo(TodoItem, (prevProps, nextProps) => {
//   //반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//   // T-> Props 바뀌지 않음 -> 리렌더링 x
//   // F-> Props 바뀜 -> 리렌더링 o
//   // console.log(prevProps);
//
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;
//
//   return true;
// });

//useCallback 으로 최적화 처리 함
export default memo(TodoItem);
