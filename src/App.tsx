import { Component, createSignal } from "solid-js";

import Autocomplete from "./components/Autocomplete";

const users = ["first", "second", "third"];

const App: Component = () => {
  const [user, setUser] = createSignal<false | string>(false);

  return (
    <>
      <Autocomplete onSelect={setUser} options={users} />
      <p>selected: {user()}</p>
    </>
  );
};

export default App;
