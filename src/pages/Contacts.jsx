import { Contacts } from "../Components/Contacts/Contacts";

import { Phonebook } from "../Components/Phonebook/Phonebook";
import { useEffect } from "react";

import { Filter } from "../Components/Filter/Filter";

import { Box } from "../utils/Box";

import { useDispatch, useSelector } from "react-redux";

import { getError, getIsLoading } from "../redux/contacts/selectors";
import { fetchContacts } from "../redux/contacts/operations";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Box display="flex" alignItems="center" flexDirection="column">
        <h1>Phonebook</h1>
        <Phonebook />
        <h2>Contacts</h2>
        {isLoading && error && <b>Request in progress...</b>}
        <Filter />
        <Contacts />
      </Box>
    </>
  );
};
export default RegisterPage;
