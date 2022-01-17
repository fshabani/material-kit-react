import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { TextField } from "@mui/material";
import Input from "../controls/Input";
import { useForm, Form } from '../useForms';
//import {Buton as muiButton} from '../controls/Button';

// const useStyles = makeStyles(theme => ({
//   root: {

//     '&&': {
//       width: "128px",
//       height: "128px",
//       margin: "8px",
//   }
//   }
// }))
const initialFValues = {
  id: 0,
  firstname: '',
  midlename: '',
  lastname: '',
  emailaddress: '',
}


export default function AddMember(props) {
  //start test
  const { addOrEdit, recordForEdit } = props

  const validate = (fieldValues = values) => {
      let temp = { ...errors }
      if ('firstname' in fieldValues)
          temp.firstname = fieldValues.firstname ? "" : "Fusha eshte obligative."
          if ('midlename' in fieldValues)
          temp.midlename = fieldValues.midlename ? "" : "Fusha eshte obligative."
          if ('lastname' in fieldValues)
          temp.lastname = fieldValues.lastname ? "" : "Fusha eshte obligative."
      if ('emailaddress' in fieldValues)
          temp.emailaddress = (/$^|.+@.+..+/).test(fieldValues.emailaddress) ? "" : "Emaili nuk eshte valid."

      setErrors({
          ...temp
      })

      if (fieldValues == values)
          return Object.values(temp).every(x => x == "")
  }

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
} = useForm(initialFValues, true, validate);

const handleSubmit = e => {
  e.preventDefault()
  if (validate()) {
      addOrEdit(values, resetForm);
  }
}

useEffect(() => {
  if (recordForEdit != null)
      setValues({
          ...recordForEdit
      })
}, [recordForEdit])

  //end test
  const [firstname, setFirstName] = useState("");
  const [midlename, setMidleName] = useState("");
  const [lastname, SetLastame] = useState("");
  const [emailaddress, SetEmailaddress] = useState("");
  const history = useHistory();
  //const classes = useStyles();
  const SaveMember = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/members", {
      firstname: firstname,
      midlename: midlename,
      lastname: lastname,
      emailaddress: emailaddress,
    });
    //history.push("/");
  };
  return (
    <div>
      <form onSubmit={SaveMember}>
        <grid container>
          <grid item xs={6}>
            <Input
              name="firstname"
              label="First Name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <TextField
              variant="outlined"
              label="Midle Name"
              placeholder="Midle Name"
              required="required"
              value={midlename}
              onChange={(e) => setMidleName(e.target.value)}
            />
            <br />
            <TextField
              variant="outlined"
              label="Last Name"
              autoFocus
              placeholder="Last Name"
              required="required"
              value={lastname}
              onChange={(e) => SetLastame(e.target.value)}
            />
            <br />
            <TextField
              variant="outlined"
              label="Email"
              value={emailaddress}
              required="required"
              onChange={(e) => SetEmailaddress(e.target.value)}
            />
          </grid>
          <grid item xs={6}></grid>
        </grid>

        <div className="field">
          <button className="button is-primary">Save</button>
        </div>

        <div></div>
      </form>
    </div>
  );
}
