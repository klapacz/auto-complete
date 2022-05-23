import { Component, createSignal } from "solid-js";

import Autocomplete from "./components/Autocomplete";

const users = ["first", "second", "third"] as const;

const App: Component = () => {
  const [user, setUser] = createSignal<typeof users[number] | undefined>();

  return (
    <>
      <Autocomplete onSelect={setUser} options={users} />
      <p>selected: {user()}</p>
    </>
  );
};

export default App;
