const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = (props) => {
  const data = [...Array(1000).keys()];
  console.log("ChildAreaがレンダリングされた！！");
  console.log(data);
  data.forEach(() => {
    console.log("...");
  });
  const { open } = props;
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};
