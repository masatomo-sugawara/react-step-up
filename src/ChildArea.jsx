import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const data = [...Array(1000).keys()];
  console.log("ChildAreaがレンダリングされた！！");
  console.log(data);
  data.forEach(() => {
    console.log("...");
  });
  const { open, onClickClose } = props;
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
