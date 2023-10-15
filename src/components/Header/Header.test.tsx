import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import {Header} from "./Header.tsx";

describe('Header', () => {
    it('should properly render top and bottom title', () => {
        const topTitle = 'Top Title';
        const bottomTitle = 'Bottom Title';

        render(<Header topTitle={topTitle} bottomTitle={bottomTitle} />);

        expect(screen.getByText(topTitle)).toBeDefined()
        expect(screen.getByText(bottomTitle)).toBeDefined()
    })
})