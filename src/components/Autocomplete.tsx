import { createMemo, createSignal, For, Show, JSX } from "solid-js";

type Option = string;

interface AutocompleteProps<T extends Option> {
  /**
   * The list of options to display in the autocomplete.
   */
  options: T[] | ReadonlyArray<T>;
  onSelect: (value: this["options"][number] | undefined) => void;
}

const Autocomplete = <T extends Option>(
  props: AutocompleteProps<T>
): JSX.Element => {
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
          props.onSelect(undefined);
        }}
      />
      <Show when={!selected()}>
        <ul>
          <For each={options()} fallback="No options to show.">
            {(option) => (
              <li
                onClick={() => {
                  setSelected(true);
                  setText(option as string);
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
