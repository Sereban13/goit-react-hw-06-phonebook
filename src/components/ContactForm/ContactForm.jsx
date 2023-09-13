import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import { nanoid } from 'nanoid';
import { Input, Forma, Label, ButtonSubmit } from './ContactForm.Styled';
import { addContact } from 'redux/contactsSlice';

const phoneRegExp =
  /^\+?\d{1,4}?[ .-]?(\(\d{1,3}\))?([ .-]?\d{1,4}){1,4}([ .-]?\d{1,9})?$/;

const schema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.string().matches(phoneRegExp).required('Required'),
});

const Submit = (values, actions) => {
  const dispatch = useDispatch();
  dispatch(addContact({ ...values }));
  actions.resetForm();
};

export const ContactForm = () => {
  <div>
    <Formik
      initialValues={{
        firstName: '',
        phoneNumber: '',
      }}
      validationSchema={schema}
      onSubmit={Submit}
    >
      <Forma>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="firstName"
          type="text"
          placeholder="Enter the name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />

        <Label htmlFor="number">Number</Label>
        <Input
          id="number"
          name="phoneNumber"
          type="tel"
          placeholder="Enter the phone number..."
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </Forma>
      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </Formik>
  </div>;
};
