import { test, expect} from "vitest";
import { render, screen} from "@testing-library/react";
import Display from "./Display";

test('Display renders correctly', () => {
    render(<Display/>)
})


test('Renders the text THIS IS A SENTENCE!', () => {
    const { getByText } = render(<Display bigText={"THIS IS A SENTENCE."} />)
    const element = getByText("THIS IS A SENTENCE.")
    expect(element).toBeInTheDocument()
})

test('Renders just a 9 char text, and cut if bigger', () => {
    const { getByText } = render(<Display bigText={"123456789-10"} smallText={"987654321-10"} maxLength={9} />)
    const bigText = getByText("123456789")
    const smallText = getByText("987654321")
    expect(bigText, smallText).toBeInTheDocument()
})