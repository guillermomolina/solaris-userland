"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("devtools/client/shared/vendor/react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("devtools/client/debugger/dist/vendors").vendored["classnames"];

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

const AccessibleImage = props => {
  props = {
    ...props,
    className: (0, _classnames2.default)("img", props.className)
  };
  return _react2.default.createElement("span", props);
};

exports.default = AccessibleImage;