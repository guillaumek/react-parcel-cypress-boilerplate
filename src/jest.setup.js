import React from "react";

import Enzyme, {
  shallow,
  render,
  mount,
  ReactWrapper,
  ShallowWrapper
} from "enzyme";

import sinon from "sinon";

const dotenv = require("dotenv");

const Adapter = require("enzyme-adapter-react-16");
Enzyme.configure({ adapter: new Adapter() });

var envPath = ".env." + process.env.NODE_ENV;
var result = dotenv.config({ path: envPath });

global.React = React;
global.ReactWrapper = ReactWrapper;
global.ShallowWrapper = ShallowWrapper;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;
