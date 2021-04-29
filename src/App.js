import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Contacts from "./components/Contacts";
import ContactList from "./components/ContactList";
import { onUpdate } from "./redux/phoneBook/reducer";
import { getFilter } from "./redux/phoneBook/selectors";

const App = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter); //from redux

  const handleFilter = (filterText) => dispatch(onUpdate(filterText));

  const handleChange = (e) => {
    const filter = e.target.value;

    handleFilter(filter);
  };

  return (
    <>
      <span>Find:</span>
      <input type="text" value={filter} name="filter" onChange={handleChange} />

      <Contacts />

      <ContactList />
    </>
  );
};

export default App;
