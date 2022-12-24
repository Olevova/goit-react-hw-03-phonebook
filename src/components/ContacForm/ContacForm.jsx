import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import style from './ContacForm.module.scss'

export class ContactForm extends React.Component{ 
  state = {
    name: '',
    number: ''
  }

    handleName = ev =>
  {
    this.setState({[ev.currentTarget.name]: ev.currentTarget.value});
  }

  reset = () => {
    this.setState({
    name: '',
    number: ''
  })
  }

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  }

  render() {
    return (
       <Box
      sx={{
        display: 'flex',
        flexDirection: "column",
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Paper elevation={3}>
      <form onSubmit={this.handleSubmit}>
      <label className={style.labelEl}>
        Name
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className = {style.labelEl}>
        Number
        <input
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleName}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" style={{ color: "#f0ffff", borderColor: "#f0ffff", backgroundColor:"rgb(136, 169, 157)", justifyContent:"center" , marginBottom:"20px"}} type="submit">
          Add Contact 
        </Button>
        </Stack>
        </form>
        </Paper>
        </Box>)
        
  }

}
