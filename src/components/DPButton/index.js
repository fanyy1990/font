import React from "react";
import { Button } from "antd";
import { withI18n, Trans } from "@lingui/react";
import { i18nT } from "../../utils/index";
import styles from "./index.less";

@withI18n()
class DPButton extends React.PureComponent {
  render() {
    let { defaultLocale = "zh_Hans" } = this.props;
    return (
      <div className={styles.cus_button}>
        <Button>
          {i18nT(`LOCALE_DEVICE_MANGEMENT_PICTURE_PREVIOUS`, defaultLocale)}
        </Button>
      </div>
    );
  }
}

export default DPButton;
