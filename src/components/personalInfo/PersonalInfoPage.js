import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import logo from '../../images/logoSquare.png';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import MaterialUIPickers from './MaterialUIPickers';


const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        UoE Shenzhen
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function PersonalInfoPage() {
  const classes = useStyles();
  const [gender, setGender] = React.useState('');
  const handleChange = event => {
    setGender(event.target.value);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <img src={logo} height="50"></img>
        </Avatar>
        <Typography component="h1" variant="h5">
         Personal Details
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="demo-customized-select-native">Gender</InputLabel>
                <NativeSelect
                id="demo-customized-select-native"
                value={gender}
                onChange={handleChange}
                input={<BootstrapInput />}
                >
                <option value={'female'}>Female</option>
                <option value={'male'}>Male</option>
                </NativeSelect>
            </FormControl>
            <MaterialUIPickers />
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Phone Number"
                id="phone"
                autoComplete="phone"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="location"
                label="Location"
                id="location"
                autoComplete="location"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="company"
                label="Company"
                id="company"
                autoComplete="company"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="career"
                label="Career"
                id="career"
                autoComplete="career"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="graduation_year"
                label="Graduation Year"
                id="graduation_year"
                autoComplete="graduation_year"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="degree"
                label="Degree"
                id="degree"
                autoComplete="degree"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="programme"
                label="Programme"
                id="programme"
                autoComplete="programme"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="speciality"
                label="Speciality"
                id="speciality"
                autoComplete="speciality"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="interest"
                label="Interest"
                id="interest"
                autoComplete="interest"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}