import { render } from "@testing-library/react";
import Display from ".";

describe("Display Component", () => {
  it("render display component", () => {
    // ARRANGE
    const { container } = render(<Display content='' />);

    // ACT
    const displayInstance = container.getElementsByClassName('display');

    // ASSERT
    expect(displayInstance.length).toBe(1);
  });

  it("check display content", () => {
    // ARRANGE
    const { container } = render(<Display content='test' />);

    // ACT
    const displayInstance = container.getElementsByClassName('display');

    // ASSERT
    expect(displayInstance[0].innerHTML).toBe('test');
  });
});
