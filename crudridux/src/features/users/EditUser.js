
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { editUser } from "./userSlice";

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existingUser = users.find(user => user.id === params.id);
  const { name, email } = existingUser;
  const [values, setValues] = useState({ name, email });
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

  const handleEditUser = () => {
    if (validate()) {
      dispatch(editUser({
        id: params.id,
        name: values.name,
        email: values.email
      }));
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
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;



// import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate, useParams } from "react-router-dom"
// import Button from "../../components/Button"
// import TextField from "../../components/TextField"
// import { editUser } from "./userSlice"

// const EditUser = () => {
//   const params = useParams();
//   const dispatch = useDispatch();
//   const users = useSelector(store => store.users);
//   const navigate = useNavigate();
//   const existingUser = users.filter(user => user.id === params.id);
//   const { name, email } = existingUser[0];
//   const [values, setValues] = useState({
//     name,
//     email
//   });

//   const handleEditUser = () => {
//     setValues({ name: '', email: '' });
//     dispatch(editUser({
//       id: params.id,
//       name: values.name,
//       email: values.email
//     }));
//     navigate('/');
//   }

//   return (
//     <div className="mt-10 max-w-xl mx-auto">
//       <TextField
//         label="Name"
//         value={values.name}
//         onChange={(e) => setValues({ ...values, name: e.target.value })}
//         inputProps={{ type: 'text', placeholder: 'Jhon Doe' }}
//       />
//       <br />
//       <TextField
//         label="Email"
//         value={values.email}
//         onChange={(e) => setValues({ ...values, email: e.target.value })}
//         inputProps={{ type: 'email', placeholder: 'jhondoe@mail.com' }}
//       />
//       <Button onClick={handleEditUser}>Edit</Button>
//     </div>
//   )
// }

// export default EditUser