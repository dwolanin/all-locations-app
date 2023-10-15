import {beforeEach, describe, expect, it, vi} from "vitest";
import {Location} from "../api/useAllLocations.ts";
import {render, screen, waitFor} from "@testing-library/react";
import {AllLocations} from "./AllLocations.tsx";

const locations: Location[] = [{
    name: 'Acme HQ',
    description: 'description',
    createdAt: '2021-03-05T09:10:35.462Z',
    id: "Id1",
    userCount: 1
}, {
    name: 'Acme HQ 2',
    description: 'description 2',
    createdAt: '2021-03-05T09:10:35.462Z',
    id: "Id2",
    userCount: 2
}, {
    name: 'Acme HQ 3',
    description: 'description 3',
    createdAt: '2021-03-05T09:10:35.462Z',
    id: "Id3",
    userCount: 3
}, {
    name: 'Acme HQ 4',
    description: 'description 4',
    createdAt: '2021-03-05T09:10:35.462Z',
    id: "Id4",
    userCount: 4
}];

describe('AllLocations', () => {
    beforeEach(() => {
        vi.spyOn(global, 'fetch').mockImplementationOnce(() => Promise.resolve({
            json: () => Promise.resolve(locations),
        } as Response));
    });

    it('should render a card for every location', async () => {
        render(<AllLocations />);

        await waitFor(async () => {
            expect(await screen.findAllByRole('button')).toHaveLength(4);
        })
    });

    // TODO: write more tests
})