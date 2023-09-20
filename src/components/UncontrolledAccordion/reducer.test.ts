import {actionCreator, reducer, StateType} from "./reducer";

test("reducer should change value to opposite value", () => {
    // data
    const state: StateType = {
        collapsed: false
    }

    // action
    const newState = reducer(state, actionCreator())

    // expectation
    expect(newState.collapsed).toBe(true);
});
