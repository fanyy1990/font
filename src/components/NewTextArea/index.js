import React, { Fragment, PureComponent } from "react";
import { Input } from "antd";
import styles from "./index.less";

const { TextArea } = Input;

class NewTextArea extends PureComponent {
  render() {
    let {
      style,
      maxLength = 128,
      onChange,
      textAreaValue,
      outerStyle,
    } = this.props;

    return (
      <div style={{ ...outerStyle }} className={styles.textareabox}>
        <TextArea
          className={styles.area}
          value={textAreaValue}
          style={{ resize: "none", ...style }}
          rows={5}
          onChange={(e) => onChange(e)}
        />
        <div className={styles.textareaLength}>
          {textAreaValue ? textAreaValue.length : 0}/{maxLength}
        </div>
      </div>
    );
  }
}

export default NewTextArea;
