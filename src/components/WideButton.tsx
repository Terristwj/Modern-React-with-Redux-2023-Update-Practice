interface iWideButton {
  wideBtnClassNames: string;
  JSXButton: JSX.Element;
}
/**
 * WideButton()
 * @summary - WideButton React Component.
 * @return {JSX.Element} - WideButton with Button.
 */
function WideButton({
  wideBtnClassNames,
  JSXButton,
}: iWideButton): JSX.Element {
  return <div className={wideBtnClassNames}>{JSXButton}</div>;
}

export default WideButton;
