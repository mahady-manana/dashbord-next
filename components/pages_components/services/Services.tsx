import { Button, TextField } from '@material-ui/core';
import React, { FC, useState } from 'react';
import { useStyles } from './style'


export const PageServices = () => {
  const [values, setValues] = useState({
    lundi: {
      lundi1: '',
      lundi2: '',
      lundi3: '',
    },
    mardi: {
      mardi1: '',
      mardi2: '',
      mardi3: ''
    },
    merc: '',
    jeu: '1521',
  })
  const classes = useStyles();
  const handleChange = (ref: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const val = event.target.value;
    setValues({...values, [ref] : { ...values[ref], [name]: val}})
  }
  const add = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
  }
  return (
    <>
     <div>
       <form onSubmit={add}>
         <TextField
           variant='outlined'
           label='lundi 1'
           itemRef='lundi'
           name='lundi1'
           onChange={handleChange('lundi')}
         />
         <TextField
           variant='outlined'
           label='lundi 2'
           itemRef='lundi'
           name='lundi2'
           onChange={handleChange('lundi')}
         />
         <TextField
           variant='outlined'
           label='lundi 3'
           itemRef='lundi'
           name='lundi3'
           onChange={handleChange('lundi')}
         />
         <TextField
           variant='outlined'
           label='mardi 1'
           itemRef='mardi'
           name='mardi1'
           onChange={handleChange('mardi')}
         />
         <TextField
           variant='outlined'
           label='mardi 2'
           itemRef='mardi'
           name='mardi2'
           onChange={handleChange('mardi')}
         />
         <TextField
           variant='outlined'
           label='mardi 3'
           itemRef='mardi'
           name='mardi3'
           onChange={handleChange('mardi')}
         />
         <Button color='primary' type='submit' variant='outlined'>
            Add
         </Button>
       </form>
     </div>
    </>
  );
}
