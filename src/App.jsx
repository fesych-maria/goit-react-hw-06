import "./App.css";
import Container from "./components/Container/Container";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  // const filterContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(text.toLowerCase())
  // );

  return (
    <Container>
      <h1 className="heading">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </Container>
  );
};

export default App;
