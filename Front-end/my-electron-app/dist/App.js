"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
function App() {
    return (react_1.default.createElement(Button_1.default, { variant: "contained", color: "primary" }, "Hello World"));
}
exports.default = App;
