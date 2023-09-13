import { ContactCard } from 'components/ContactCard/ContactCard';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getContacts } from 'redux/store';

export const ContactList = ({ onDelete }) => {
  const contacts = useSelector(getContacts);
  return (
    <ul>
      {contacts.map(contact => (
        <div key={contact.id}>
          <ContactCard contact={contact} onDelete={onDelete} />
        </div>
      ))}
    </ul>
  );
};
