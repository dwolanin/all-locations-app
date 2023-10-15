import {AllLocations} from "./pages/AllLocations.tsx";

/*
General comments
1. I'm aware that styling is not pixel perfect correct and there are some misalignments with the design. Not CSS master and had difficulties when working witch Sketch
and focused more on app features
2. There are some tests missing, but I had a bit limited time due to my personal life activities
3. There is no routing, I didn't wanted to waste time on it, but would probably pick react-router for it
4. A lot of a11y issues in the app, not time for it as well
5. A little mess on classes as well, a bit regret that I didn't set up some scss modules loader here, but works for now. BEM might help here as well
 */
export const App = () => {
  return (
    <AllLocations />
  )
}

export default App
