import {describe, expect, it, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Button} from "./Button.tsx";

describe("Button", () => {
    it('should render a button with label provided as children', () => {
        render(<Button onClick={() => {}}>Label</Button>)

        expect(screen.getByRole('button', {name: 'Label'})).toBeDefined();
    });

    it('should should call provided onClick handler on button click', async () => {
        const onClick = vi.fn();

        render(<Button onClick={onClick}>Label</Button>)
        await userEvent.click(screen.getByRole('button'));

        expect(onClick).toHaveBeenCalledOnce();
    });
});
