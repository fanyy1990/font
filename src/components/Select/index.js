import React from "react";
import { Select as AntdSelect } from "antd";
import PropTypes from "prop-types";

const { Option } = AntdSelect;

class Select extends React.PureComponent {
  render() {
    const {
      options = [],
      defaultValue,
      showEmpty = false,
      ...rest
    } = this.props;
    const _defaultValue =
      defaultValue || (options && options[0] && options[0].value);

    return (
      <AntdSelect
        defaultValue={showEmpty ? undefined : _defaultValue}
        getPopupContainer={(triggerNode) => triggerNode.parentElement}
        {...rest}
        optionLabelProp="text"
      >
        {options.map((opt) => (
          <Option
            title={opt.text}
            key={opt.value + "-" + opt.text}
            value={opt.value}
            {...opt}
          >
            {opt.text}
          </Option>
        ))}
      </AntdSelect>
    );
  }
}
Select.propTypes = {
  options: PropTypes.array,
};
export default Select;
