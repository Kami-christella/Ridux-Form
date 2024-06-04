import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { addUser } from "./userSlice";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });

  const validate = () => {
    let isValid = true;
    let errors = { name: '', email: '' };

    if (!values.name) {
      errors.name = 'Name is required';
      isValid = false;
    } else if (values.name.length < 5) {
      errors.name = 'Name should be at least 5 characters';
      isValid = false;
    }

    if (!values.email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleAddUser = () => {
    if (validate()) {
      dispatch(addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email
      }));
      setValues({ name: '', email: '' });
      navigate('/');
    }
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'John Doe' }}
      />
      {errors.name && <p className="text-red-500">{errors.name}</p>}
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'johndoe@mail.com' }}
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;





// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from 'uuid';
// import Button from "../../components/Button";
// import TextField from "../../components/TextField";
// import { addUser } from "./userSlice";

// const AddUser = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     name: '',
//     email: ''
//   });

//   const handleAddUser = () => {
//     dispatch(addUser({
//       id: uuidv4(),
//       name: values.name,
//       email: values.email
//     }));
//     setValues({ name: '', email: '' });
//     navigate('/');
//   };

//   return (
//     <div className="mt-10 max-w-xl mx-auto">
//       <TextField
//         label="Name"
//         value={values.name}
//         onChange={(e) => setValues({ ...values, name: e.target.value })}
//         inputProps={{ type: 'text', placeholder: 'John Doe' }}
//       />
//       <br />
//       <TextField
//         label="Email"
//         value={values.email}
//         onChange={(e) => setValues({ ...values, email: e.target.value })}
//         inputProps={{ type: 'email', placeholder: 'johndoe@mail.com' }}
//       />
//       <Button onClick={handleAddUser}>Submit</Button>
//     </div>
//   );
// };

// export default AddUser;
