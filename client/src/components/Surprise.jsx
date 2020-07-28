import React, {useState, useEffect} from 'react';
//import img from './components/bby.png';

const pics = ["img/bby.png", "img/bby2.png", "img/bby3.png", "img/bby4.png", "img/bby5.png","img/bby6.png","img/bby7.png"];

const Surprise = props => {
    return(
        <>
            <h1 className="text-light mt-3">SURPRISE!</h1>
            <h3 className="text-light">Here are some pictures of cute baby sea otters to help you jumpstart your day</h3>
            <img src={pics[0]} alt="baby otter" height="190px"/><br/>
            <img src={pics[1]} alt="baby otter" height="190px"/>
            <img src={pics[2]} alt="baby otter" height="190px"/>
            <img src={pics[3]} alt="baby otter" height="190px"/>
            <img src={pics[4]} alt="baby otter" height="190px"/>
            <img src={pics[5]} alt="baby otter" height="190px"/>
            <img src={pics[6]} alt="baby otter" height="190px"/>
        </>
    )
}

export default Surprise;