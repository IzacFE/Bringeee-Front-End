import React from "react";
import { TextInput, ActionIcon } from "@mantine/core";
import { Search, ArrowRight } from "tabler-icons-react";

function SearchComps(props) {
  return (
    <TextInput
      icon={<Search size={18} />}
      radius="xl"
      size="md"
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          variant="filled"
          onClick={props.onClick}
          className="bg-amber-500 hover:bg-white hover:text-amber-500 hover:border-amber-500 hover:border-2"
        >
          <ArrowRight size={18} onClick={props.onClick} />
        </ActionIcon>
      }
      placeholder="Cari Order"
      rightSectionWidth={42}
      onChange={props.onChange}
      // onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}

export default SearchComps;

{
  /* <SearchComps
  onChange={(event) => setSearch(event.currentTarget.value)}
  onClick={() => {
    console.log(search);
  }}
/>; */
}

{
  /* <div className={styles.searchContainer}></div>; */
}
