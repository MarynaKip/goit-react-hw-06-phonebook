import "./App.css";
import { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import Contacts from "./components/Contacts";
import ContactList from "./components/ContactList";
import * as actions from "./redux/phoneBook/actions";

const App = ({ onUpdate }) => {
  const alert = useAlert();

  const filter = ""; //from redux
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   const storageContacts = localStorage.getItem("contacts");
  //   setContacts(JSON.parse(storageContacts));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // });

  const handleFilter = (e) => onUpdate(e.target.value);

  // const handleAddContact = (newContact) => {
  //   if (contacts.some((contact) => contact.name === newContact.name)) {
  //     alert.show(`Contact is already in contscts.`);
  //     return;
  //   }
  //   setContacts((prevState) => [...prevState, newContact]);
  // };

  return (
    <>
      <span>Find:</span>
      <input type="text" value={filter} name="filter" onChange={handleFilter} />

      <Contacts />

      <ContactList />
    </>
  );
};

export default App;
