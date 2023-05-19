import { ButtonTailwindCSS, ButtonSpanTailwindCSS } from "../util/util";

interface iButton {
  btnClassNames: string;
  btnTextClassNames: string;
  btnText: string;
  [x: string]: any;
}

/**
 * Button()
 * @summary - Button React Component
 * @return {JSX.Element} - Button with classNames, text and optional events
 */
function Button({
  btnClassNames,
  btnTextClassNames,
  btnText,
  ...rest
}: iButton): JSX.Element {
  return (
    <button className={btnClassNames + ButtonTailwindCSS} {...rest}>
      <p className={btnTextClassNames + ButtonSpanTailwindCSS}>{btnText}</p>
    </button>
  );
}

export default Button;
