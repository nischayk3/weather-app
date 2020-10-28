import React from "react";
import "./Weather.css";
import { Typography } from '@material-ui/core';

const Weather = ({ city, country, temp, temp_max, temp_min, description }) => {
    return (
        <div className="weather">
            { city && country ? <Typography variant="h5" component="h2">
                {city}, {country}
            </Typography> : null}
            { temp ? <Typography variant="h5" component="h2">
                {(temp - 273.15).toFixed(2)}&deg;C
            </Typography> : null}
            { temp_min && temp_max
                ? <Typography variant="h5" component="h2">
                    {(temp_min - 273.15).toFixed(2)}&deg;C - {(temp_max - 273.15).toFixed(2)}&deg;C
                </Typography>
                : null
            }
            <Typography variant="h5" component="h2">
            {description}
            </Typography>
        </div>
    )
}

export default Weather


