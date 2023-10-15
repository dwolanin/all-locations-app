import {describe, expect, it} from "vitest";
import {act, renderHook} from "@testing-library/react";
import {useLocationViews} from "./useLocationViews.ts";

describe("useLocationViews", () => {
    it("should return an empty views object on init", () => {
        const { result } = renderHook(() => useLocationViews());

        expect(result.current.views).toEqual({});
    })

    it("should bump views for given id", () => {
        const id = "ID";
        const { result } = renderHook(() => useLocationViews());

        act(() => {
            result.current.bumpViews(id)
        });

        expect(result.current.views[id]).toBe(1);
    });

    it("should bump views for given id twice", () => {
        const id = "ID";
        const { result } = renderHook(() => useLocationViews());

        act(() => {
            result.current.bumpViews(id)
            result.current.bumpViews(id)
        });

        expect(result.current.views[id]).toBe(2);
    });
});
