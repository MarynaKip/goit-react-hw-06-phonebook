import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import ContactItem from "../ContactItem";
import * as actions from "../../redux/phoneBook/actions";

const useStyles = createUseStyles({
  list: {
    listStyle: "none",
    margin: 0,
    padding: 10,
  },
});

const getContacts = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;

const ContactList = ({ onDelete }) => {
  const classes = useStyles();

  const contacts = useSelector(getContacts); //from redux
  const filter = useSelector(getFilter); //from redux

  const contactsArr = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteItem = (e) => onDelete(e.target.value);

  return (
    <ul className={classes.list}>
      {contactsArr.map((contact) => (
        <ContactItem contact={contact} onClick={onDelete} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
