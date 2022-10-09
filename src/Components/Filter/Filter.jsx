import { Label, Input } from "./Filter.styled";

import { useDispatch } from "react-redux";
import { filterTask } from "../../redux/contacts/contatcsSlice";
export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = (e) => {
    const value = e.currentTarget.value;
    dispatch(filterTask(value));
  };
  return (
    <>
      <Label>
        <Input
          type="text"
          name="filter"
          onChange={changeFilter}
          placeholder="Find contacts by name"
        ></Input>
      </Label>
    </>
  );
};
