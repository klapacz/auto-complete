import { Component, createMemo, createSignal, For, Show } from "solid-js";

export type AutocompleteProps = {
  /**
   * The list of options to display in the autocomplete.
   */
  options: string[];
  onSelect: (value: string | false) => void;
};

const Autocomplete: Component<AutocompleteProps> = (props) => {
  const [text, setText] = createSignal("");
  const [selected, setSelected] = createSignal<boolean>(false);

  const options = createMemo(() =>
    props.options.filter((option) =>
      option.toLowerCase().startsWith(text().toLowerCase())
    )
  );

  return (
    <>
      <input
        value={text()}
        onInput={(e) => {
          setSelected(false);
          setText(e.currentTarget.value);
        }}
      />
      <Show when={!selected()}>
        <ul>
          <For each={options()} fallback="No options to show.">
            {(option) => (
              <li
                onClick={() => {
                  setSelected(true);
                  setText(option);
                  props.onSelect(option);
                }}
              >
                {option}
              </li>
            )}
          </For>
        </ul>
      </Show>
    </>
  );
};

export default Autocomplete;
