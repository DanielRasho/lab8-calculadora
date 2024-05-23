import { test, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

test('Button renders correctly', () => {
    render(<Button/>)
})

test('Renders the text IM A BUTTON!', () => {
    const { getByText } = render(<Button text={"IM A BUTTON!"} />)
    const element = getByText('IM A BUTTON!')
    expect(element).toBeInTheDocument()
})

test('Calls the callback function OnClick', () => {
    const spyFunction = vi.fn()
    const { getByText } = render(<Button text={'IM A BUTTON!'} onClick={spyFunction}/>)
    const element = getByText('IM A BUTTON!')

    fireEvent.click(element)

    expect(spyFunction).toHaveBeenCalledOnce()
})
