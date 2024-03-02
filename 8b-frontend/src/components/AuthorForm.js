import { useMutation } from "@apollo/client";
import { ALL_AUTHORS, EDIT_AUTHOR } from "../query";
import { useState } from "react";
import Select from "react-select";

function AuthorForm({authors}) {
  const [born, setBorn] = useState('')
  const [selectedOption, setSelectedOption] = useState(null)
  const name = selectedOption.value
  const [ changeBorn ] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{query: ALL_AUTHORS}]
  })

  const options = authors.map(a => { 
    return {value: a.name, label: a.name} 
  })

  const submit = async (event) => {
    event.preventDefault();

    changeBorn({ variables: { name, born } });

    setBorn("");
  };

  return (
    <div>
      <h2>Set birthyear</h2>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
      <form onSubmit={submit}>
        <div>
          born{" "}
          <input
            value={born}
            onChange={({ target }) => setBorn(Number(target.value))}
          />
        </div>
        <button type="submit">update author</button>
      </form>
    </div>
  );
}

export default AuthorForm