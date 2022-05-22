import type { Component } from "solid-js";

export type AutocompleteProps = {
  /**
   * The list of options to display in the autocomplete.
   */
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

const Autocomplete: Component<AutocompleteProps> = (props) => {
  return (
    <p>
      <input
        value={props.value}
        onInput={(e) => props.onChange(e.currentTarget.value)}
      />
    </p>
  );
};

export default Autocomplete;
