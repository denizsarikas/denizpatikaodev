function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {"button1":"_Mbrxq","button2":"_3V4K4","button3":"_DnISs","blue":"_xHAXC"};

var Button1 = function Button1(props) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: props.onClick,
    className: styles.button1
  }, /*#__PURE__*/React.createElement("span", null, props.text));
};
var Button2 = function Button2(props) {
  return /*#__PURE__*/React.createElement("nav", {
    onClick: props.onClick,
    className: styles.button2
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, props.text, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))));
};
var Button3 = function Button3(props) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: props.onClick,
    className: styles.button3 + " " + styles.blue
  }, props.text);
};

exports.Button1 = Button1;
exports.Button2 = Button2;
exports.Button3 = Button3;
//# sourceMappingURL=index.js.map
