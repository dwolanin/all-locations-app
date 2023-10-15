import {describe, expect, it, vi} from "vitest";
import {Location} from "../../api/useAllLocations.ts";
import {LocationCard} from "./LocationCard.tsx";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("LocationCard", () => {
    it("should render all the details", () => {
        const location: Location = {
            name: 'Acme HQ',
            description: 'description',
            createdAt: '2021-03-05T09:10:35.462Z',
            id: "Id",
            userCount: 1293
        }

        render(<LocationCard location={location} views={10} onModalOpen={vi.fn()} />)

        expect(screen.getByRole('heading', {name: location.name})).toBeDefined();
        expect(screen.getByText(location.userCount + ' Users')).toBeDefined();
        expect(screen.getByText(10 + ' Views')).toBeDefined();
        // TODO: to be fixed
        // expect(screen.getByText(getFormattedTime(location.createdAt))).toBeDefined();
    });

    it("should call onModalOpen on card click", async () => {
        const location: Location = {
            name: 'Acme HQ',
            description: 'description',
            createdAt: '2021-03-05T09:10:35.462Z',
            id: "Id",
            userCount: 1293
        }

        const onModalOpen = vi.fn();

        render(<LocationCard location={location} views={10} onModalOpen={onModalOpen} />)

        await userEvent.click(screen.getByRole('button'));

        expect(onModalOpen).toHaveBeenCalled();
    });

    it("should show edit icon on hover", async () => {
        const location: Location = {
            name: 'Acme HQ',
            description: 'description',
            createdAt: '2021-03-05T09:10:35.462Z',
            id: "Id",
            userCount: 1293
        }

        render(<LocationCard location={location} views={10} onModalOpen={vi.fn()} />)

        expect(screen.queryByTitle('Edit')).toBeNull();

        await userEvent.hover(screen.getByRole('button'));

        expect(screen.queryByTitle('Edit')).toBeDefined();
    });
});