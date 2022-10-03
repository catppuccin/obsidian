"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.ruleName = exports.messages = void 0;

var _stylelint = require("stylelint");

var _utils = require("../../utils");

var ruleName = (0, _utils.namespace)("at-use-no-unnamespaced");
exports.ruleName = ruleName;

var messages = _stylelint.utils.ruleMessages(ruleName, {
  rejected: "Unexpected @use without namespace"
});

exports.messages = messages;

function _default(actual) {
  return function (root, result) {
    var validOptions = _stylelint.utils.validateOptions(result, ruleName, {
      actual: actual
    });

    if (!validOptions) {
      return;
    }

    root.walkAtRules("use", function (decl) {
      if (/as\s*\*\s*(?:$|with\s*\()/.test(decl.params)) {
        _stylelint.utils.report({
          message: messages.rejected,
          node: decl,
          result: result,
          ruleName: ruleName
        });
      }
    });
  };
}