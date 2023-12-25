import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@nextui-org/button";

describe("button", () => {
  it("should work click on button", async () => {
    const handleClick = jest.fn();
    const buttonText = "Button";

    // render
    render(<Button onClick={handleClick}>{buttonText}</Button>);

    // click
    await userEvent.click(screen.getByText(buttonText));

    // mock function have been called
    expect(handleClick).toHaveBeenCalled();
  });
});
