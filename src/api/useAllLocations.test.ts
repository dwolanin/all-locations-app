import {describe, expect, it, vi} from "vitest";
import {renderHook} from "@testing-library/react";
import {useAllLocations} from "./useAllLocations.ts";

describe('useAllLocations', () => {
    it('should fetch data from proper api on init', () => {
        vi.spyOn(global, "fetch").mockImplementationOnce(() => Promise.resolve({
            json: () => Promise.resolve([]),
        } as Response));

        renderHook(() => useAllLocations());

        expect(global.fetch).toHaveBeenCalledWith("https://6033c4d8843b15001793194e.mockapi.io/api/locations");
    });
});