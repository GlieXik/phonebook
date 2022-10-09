import { ContactsItem } from "./Contacts.styled";
import { AiFillDelete } from "react-icons/ai";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ContactsItem key={id}>
        <span>
          {name} : {number}
        </span>
        <button onClick={() => dispatch(deleteContact(id))}>
          <AiFillDelete />
        </button>
      </ContactsItem>
    </>
  );
};
