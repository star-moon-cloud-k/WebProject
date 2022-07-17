import React from 'react'
import {number} from "prop-types";

const IterationSample = () =>{

    const names = ['눈사람', '얼음', '눈', '바람']
    const namelist = names.map(name => <li>{name}</li>)

    return(
        <ul>{namelist}</ul>
    )
}

export default IterationSample;