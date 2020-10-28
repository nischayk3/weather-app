import React, { useState } from "react";
// import { makeStyles } from '@material-ui/core/styles';
import "./Form.css"
import axios from "axios";
import Weather from '../Weather/Weather';
// import axios from "axios";
// import Weather from '../Weather/Weather';
import { Input, Button} from '@material-ui/core';
// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     borderRadius: 3,
//     border: 0,
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     // $disabled is a reference to the local disabled
//     // rule within the same style sheet.
//   },
//   disabled: {},
// });
const style = {
  margin: 10,
};



const api_key = "85826683234c59be3ddee629f3669bb3 "

const FormInput = () => {
  // const classes = useStyles();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [temp_min, setTemp_min] = useState("");
  const [temp_max, setTemp_max] = useState("");
  const [temp, setTemp] = useState("");
  const [city1, setFirstName] = useState("");
  const [country1, setLastName] = useState("");
  const handleFirstNameChange = ({ target }) => {
    setFirstName(target.value);
  };
  const handleLastNameChange = ({ target }) => {
    setLastName(target.value);
  }
  
  const getWeather = async (a, b) => {

    console.log('hello');
    const city = a
    const country = b

    if (city && country) {
        const api_call = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`);
        const response =   api_call;
        console.log(response);
        setCity(response.data.name)
        setCountry(response.data.sys.country);
        setTemp(response.data.main.temp);
        setTemp_max(response.data.main.temp_max);
        setTemp_min(response.data.main.temp_min);
        setDescription(response.data.weather[0].description);
        console.log(response);
    }
  }
  return (
    <div>
      <form className="form" >
        <Input className="inp" placeholder="City" name="city" onChange={handleFirstNameChange} style={style}/>
        <Input className='inp1' placeholder="Country" name="country" onChange={handleLastNameChange} style={style} />
        <Button variant="contained" color="secondary" style={style} onClick={()=>getWeather(city1,country1)}>
          Submit
        </Button>
      </form>
      <Weather
        city={city}
        country={country}
        temp={temp}
        temp_max={temp_max}
        temp_min={temp_min}
        description={description}
      />
    </div>
  )
}
export default FormInput;