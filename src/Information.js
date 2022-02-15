import React, { useState } from 'react'
import { FormLabel } from 'react-bootstrap'
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import WcSharpIcon from '@mui/icons-material/WcSharp';
import TextField from '@material-ui/core/TextField'
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import BadgeSharpIcon from '@mui/icons-material/BadgeSharp';
import { Select, MenuItem, InputLabel } from '@material-ui/core';
// import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';
import { FormControl, FormControlLabel } from '@material-ui/core';
// import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';
// import VisibilityOffSharpIcon from '@mui/icons-material/VisibilityOffSharp';
// import MaleSharpIcon from '@mui/icons-material/MaleSharp';
// import WcSharpIcon from '@mui/icons-material/WcSharp';
// import FemaleSharpIcon from '@mui/icons-material/FemaleSharp';
// import TransgenderSharpIcon from '@mui/icons-material/TransgenderSharp';
import { makeStyles } from '@material-ui/core';

const usestyles = makeStyles (theme =>({
    formControl:{
        minWidth:200 
    }
}))
function Information() {
          const classes = usestyles()
    const [name, setname] = useState("")
    const [gmail, setgmail] = useState("")
    // const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);


    const handlesubmit = (e) => {
        e.preventDefault()
        setname('')
        setgmail('')
        //    if (name == ''){
        //        setnameError(true)
        //    }
        //    if (gmail== ''){
        //     setgmailError(true)
        // }
        if (name && gmail)
            console.log(name, gmail)
    }



    return (
        <div class='body' style={{ textAlign: "center" }}>
            <form style={{ padding: "20px" }} noValidate autoComplete='' onSubmit={handlesubmit} >

                <TextField
                    onChange={(e) => setname(e.target.value)}
                    label='Enter your Name'
                    variant='filled'
                    color='dark'
                    required
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                    <BadgeSharpIcon/>
                                </IconButton>
                              </InputAdornment>
                        )
                    }}
                //    error={ nameError}
                />
                <br />
                <br />
                <TextField
                    onChange={(e) => setgmail(e.target.value)}

                    label='Enter your Gmail'
                    variant='filled'
                    color='dark'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                    <EmailSharpIcon />
                                </IconButton>
                              </InputAdornment>
                        )
                    }}
                    required>
                       
                {/* // error={gmailError} */}
                </TextField>

                <br />
                <br />
                <TextField
                     style={{textAlign:"center"}}
                    label='Enter Your Password'
                    variant='filled'
                    color='dark'
                    type={showPassword ? "text" : "password"}
                    // onChange={setShowPassword}   
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    // aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )   
                    }}
                />

                <br />
                <br />
                <FormControl className={classes.formControl}>
                    <FormLabel>Select The Gender<WcSharpIcon /></FormLabel>
                    <RadioGroup >
                        <FormControlLabel value='Male' control={<Radio />} label='Male' />
                        <FormControlLabel value='Female' control={<Radio />} label='female' />
                        <FormControlLabel value='Other' control={<Radio />} label='Other' />
                    </RadioGroup>
                </FormControl>
                <br />
                <br />
                <InputLabel>Course</InputLabel>
                <Select>
                    <MenuItem value={'Reactjs'} >Reactjs</MenuItem>
                    <MenuItem value={'Java'} >Java</MenuItem>
                    <MenuItem value={'Paython'} >Paython</MenuItem>
                    <MenuItem value={'Other'} >Other</MenuItem>
                </Select>
                <br />
                <br />
                <Button type='submit' color='primary' variant='contained'>Submit</Button>

                {/* <Button type='button' color='accent' variant='contained' onClick={setname("")}>Reset</Button> */}
                {/* <select>
                    <option selected value="coconut">India</option>
                    <option value="grapefruit">Canada</option>
                    <option value="lime">Dubai</option>
                    <option value="mango">London</option>
                </select>
                <br />
                <br /> */}

            </form>
        </div>
    )
}

export default Information