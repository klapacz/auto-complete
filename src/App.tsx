import { Component, createSignal } from "solid-js";

import Autocomplete from "./components/Autocomplete";

const users = ["first", "second", "third"];

const App: Component = () => {
  const [user, setUser] = createSignal("");

  return (
    <>
      <Autocomplete value={user()} onChange={setUser} options={users} />
      <p>selected: {user()}</p>
    </>
  );
};

export default App;
