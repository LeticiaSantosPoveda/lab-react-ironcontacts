
import './App.css';
import contactsJson from './contacts.json';
import {useState} from 'react';

function App() {

  const [contacts, setContacts] = useState(contactsJson.slice(0,5))


  function randomContact() {
    const newArray = contacts.map(contact => {
      return contact
    })
  
    let randomNum = Math.floor(Math.random() * contactsJson.length)
  
    newArray.push(contactsJson[randomNum])
    contactsJson.splice(randomNum, 1)
    setContacts(newArray)
  }

  function sortByName() {
    const copyContact = [...contacts]
    const sortName = copyContact.sort((a, b) => a.name > b.name ? 1 : -1)
    setContacts(sortName)
  }
  function sortByPopularity() {
    const copyContact = [...contacts]
    const sortPopularity = copyContact.sort((a, b) => b.popularity - a.popularity)
    setContacts(sortPopularity)
  }

  return (
    <div className="App" id="contactsTable">
    <h1>IronContacts</h1>
    <button onClick={randomContact}>Add Random Contact</button>
    <button onClick={sortByName}>Sort by Name</button>
    <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact =>{
            return(
              <tr>
                <td>
                  <img className='imgContact' src={contact.pictureUrl} alt='contact'/>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🏆"}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
