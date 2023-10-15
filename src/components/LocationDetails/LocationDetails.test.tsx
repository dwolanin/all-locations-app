import {describe, expect, it} from "vitest";
import {Location} from "../../api/useAllLocations.ts";
import {render, screen} from "@testing-library/react";
import {LocationDetails} from "./LocationDetails.tsx";

describe('LocationDetails', () => {
    it('should properly show all details', () => {
        const location: Location = {
            name: 'Acme HQ',
            description: 'description',
            createdAt: '2021-03-05T09:10:35.462Z',
            id: "Id",
            userCount: 1293
        }

        render(<LocationDetails location={location} views={10} />)

        expect(screen.getByText(location.userCount + ' Users')).toBeDefined();
        expect(screen.getByText(10 + ' Views')).toBeDefined();
        // TODO: to be fixed
        // expect(screen.getByText(getFormattedTime(location.createdAt))).toBeDefined();
    });

    it('should show proper label for one view and one user', () => {
        const location: Location = {
            name: 'Acme HQ',
            description: 'description',
            createdAt: '2021-03-05T09:10:35.462Z',
            id: "Id",
            userCount: 1
        }

        render(<LocationDetails location={location} views={1} />)

        expect(screen.getByText(location.userCount + ' User')).toBeDefined();
        expect(screen.getByText(1 + ' View')).toBeDefined();
        // TODO: to be fixed
        // expect(screen.getByText(getFormattedTime(location.createdAt))).toBeDefined();
    });
})