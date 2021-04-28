import { createUseStyles } from "react-jss";
import { useSelector, connect } from "react-redux";
//import PropTypes from "prop-types";
import ContactItem from "../ContactItem";
import * as actions from "../../redux/phoneBook/actions";
import { getContacts, getFilter } from "../../redux/phoneBook/selectors";

const useStyles = createUseStyles({
  list: {
    listStyle: "none",
    margin: 0,
    padding: 10,
  },
});

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

// ContactList.propTypes = {
//   contacts: PropTypes.array,
// };

// const mapStateToProps = (state) => ({
//   items: state.contacts.items,
//   filter: state.contacts.filter,
// });

// export default connect(mapStateToProps, actions)(ContactList);
export default ContactList;
