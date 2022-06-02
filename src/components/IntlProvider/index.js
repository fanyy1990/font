import React from "react";
import { render } from "react-dom";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import enMessage from "../../locales/en/messages.json";
import zhHans from "../../locales/zh_Hans/messages.json";
i18n.load({
  en: enMessage,
  zhHans: zhHans,
});
i18n.activate("en");
export default class Index extends React.PureComponent {
  render() {
    console.log("i18n---------", i18n);
    return <I18nProvider i18n={i18n}>{this.props.children}</I18nProvider>;
  }
}
