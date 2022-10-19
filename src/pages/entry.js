import React, { useState } from 'react';
import {MetaTags, meta} from 'react-meta-tags';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { FormControl, FormLabel, RadioGroup } from '@material-ui/core';
import Multiselect from 'multiselect-react-dropdown';

//import IconButton from '@mui/material/IconButton';
//import PhotoCamera from '@mui/icons-material/PhotoCamera';


export const entry = () => {
  return (
    <div align='center'>
    <MetaTags>
      <title>Data Entry</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </MetaTags>
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg">
    <Box
      component="form"
      sx={{
        display: 'flex',
        bgcolor: '#cfe8fc', height: '90%', m: 1,
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <h3 align="center">Student details</h3>
      <TextField
          required
          id="outlined-required"
          type={"date"}
          helperText="Date of joining"
        />
        <br></br>
        <TextField
          required
          id="outlined-required"
          label="Firstname"
        />
        <TextField
          required
          id="outlined-required"
          label="Lastname"
        />
        <TextField
          required
          id="outlined-required"
          label="Surname"
          
        />
        <TextField
          required
          id="outlined-required"
          type={"date"}
          helperText="Date of birth"
        />
        <TextField
          required
          id="outlined-required"
          label="Aadhar Number"
        />
        <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup 
        row>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
        </RadioGroup>
        </FormControl>
        <h3 align="center" style={{Margin:"20"}}>Parent details</h3>
        <TextField
          required
          id="outlined-required"
          label="FatherName/Guardian"
        />
        <TextField
          id="outlined-required"
          label="MotherName"
        />
        <TextField
          id="outlined-occupation"
          label="Occupation"
        />
        <TextField
          required
          id="outlined-phonenumber1"
          label="Phone Number1"
          type="phonenumber"
          helperText="Parent/Guardian Phone number"
        />
        <TextField
          required
          id="outlined-phonenumber2"
          label="Phone Number2"
          type="phonenumber"
          helperText="Parent/Guardian Phone number"
        />
        <TextField
          id="outlined-caste"
          label="Caste"
          type="text"
        />
        <h3 align="center" style={{Margin:"20"}}>Address details</h3>
        <TextField
          id="outlined-Address"
          label="Address"
          type="long text"
        />
        <TextField
          id="outlined-city"
          label="city"
          type="text"
        />
        <TextField
          id="outlined-mandal"
          label="mandal"
          type="text"
        />
        <TextField
          id="outlined-district"
          label="district"
          type="text"
        />
        <TextField
          id="outlined-state"
          label="state"
          type="text"
        />
        <TextField
          id="outlined-country"
          label="Country"
          type="text"
          defaultValue="India"
        />
        <TextField
          id="outlined-nationalism"
          label="Nationalism"
          type="text"
        />
        <TextField
          id="outlined-pin"
          label="Pin code"
          type="pin"
        />
        <h3 align="center" style={{Margin:"20"}}>Additional details</h3>
        <Multiselect
        helperText="Select interested activity"
        displayValue="key"
        onKeyPressFn={function noRefCheck(){}}
        onRemove={function noRefCheck(){}}
        onSearch={function noRefCheck(){}}
        onSelect={function noRefCheck(){}}
        placeholder="Select activities"
  options={[
    {
      Activities: 'Activity1',
      key: 'Cricket'
    },
    {
      Activities: 'Activity2',
      key: 'Badmiton'
    },
    {
      Activities: 'Activity3',
      key: 'Basket ball'
    },
    {
      Activities: 'Activity4',
      key: 'NCC'
    },
    {
      Activities: 'Activity5',
      key: 'Dance group'
    },
    {
      Activities: 'Activity6',
      key: 'Music'
    },
    {
      Activities: 'Activity7',
      key: 'NSS'
    }
  ]}
  style={{
    multiselectContainer: {
      width: "80%"
    },
    searchBox: {
      align:"center",
      width: "80%",
      Margin: "20px"
    }
  }}
  showCheckbox
  />
      </div>
      <div>
      <Button variant="contained" style={{top:"50"}}>Submit</Button>
      </div>
    </Box>
    </Container>
    </React.Fragment>
    </div>
  )
}
export default entry;
