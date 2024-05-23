import { test, expect} from "vitest";
import { render, screen} from "@testing-library/react";
import Display from "./Display";

test('Display renders correctly', () => {
    render(<Display/>)
})


test('Renders the text THIS IS A SENTENCE!', () => {
    const { getByText } = render(<Display text={"THIS IS A SENTENCE."} />)
    const element = getByText("THIS IS A SENTENCE.")
    expect(element).toBeInTheDocument()
})

test('Renders just a 9 char text, and cut if bigger', () => {
    const { getByText } = render(<Display text={"123456789-10"} maxLength={9} />)
    screen.debug()
    const element = getByText("123456789")
    expect(element).toBeInTheDocument()
})