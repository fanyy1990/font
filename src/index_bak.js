import React from "react";
import Select from "./components/Select";
import DPButton from "./components/DPButton";
import NewTextArea from "./components/NewTextArea";

export default class Index extends React.PureComponent {
  render() {
    return (
      <div>
        <span>测试组件：</span>
        <Select
          options={[
            { text: "张三", value: 1 },
            { text: "张事", value: 2 },
          ]}
          style={{ width: "100px", height: "24px" }}
        ></Select>

        <DPButton></DPButton>

        <div style={{ width: "200px", height: "150px" }}>
          <NewTextArea></NewTextArea>
        </div>
      </div>
    );
  }
}
