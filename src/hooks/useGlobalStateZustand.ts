import { create } from "zustand";

// Define global state types
type GlobalStateType = {
  activeIndex: number;
};

// Define actions
type ActionsType = {
  setActiveIndex: (index: number) => void;
};

export const useGlobalStateZustand = create<GlobalStateType & ActionsType>(
  (set) => ({
    // Initial states
    activeIndex: 0,

    // Actions to modify the state
    setActiveIndex: (index) => set({ activeIndex: index }),
  })
);

/** Use Zustans When your application is medium to large,
 *  You want high performance and minimal setup and You don’t need complex middleware or advanced async logic. */
// Strengths: Minimal Configuration, High Performance, No Provider Required.
// Weaknesses: Not Ideal for Very Large Applications.

/* Another Way*/
// Use Context API + useReducer when your App small or medium, Manament some simple State
// And You want to stick with native React APIs and avoid installing external libraries.

/* Use Redux */
// Your application is large or enterprise-level.
// You need to manage complex state logic and handle side effects.
//You need advanced middleware and powerful DevTools for debugging.
