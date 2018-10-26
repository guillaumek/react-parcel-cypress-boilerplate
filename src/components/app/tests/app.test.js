import * as React from "react";
import App from "../App";

describe("App component", () => {
  const component = mount(<App />);

  it("is defined", () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(ReactWrapper);
  });

  it("renders main content", () => {
    expect(component.find("div").children().length).toBe(2);
  });

  it("matches snapshot", () => {
    const shallowComponent = shallow(<App />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
