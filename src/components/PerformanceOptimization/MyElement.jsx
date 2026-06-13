import { memo } from "react";
import MyParagraph from "./MyParagraph";

const MyElement = ({ show }) => {
  console.log("MyElement re-render oldu!");
  return <MyParagraph>{show && "MyElement"}</MyParagraph>;
};

const MyElementMemo = memo(MyElement);

export default MyElementMemo;
