import React, {useState, useEffect} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const ScheduleForm = props => {
    const [activity, setActivity] = useState("");
    const [desc, setDesc] = useState("");
    const [start, setStart] = useState("");
    const [duration, setDuration] = useState(0);
    const [timeunits, setTimeunits] = useState("minutes");
    const [errors, setErrors] = useState({});

    const createSchedule = e => {
        e.preventDefault();
        const scheduleEvent = {activity, desc, start, duration, timeunits}
        axios.post("http://localhost:8000/api/schedule", scheduleEvent)
            .then(res =>{
                console.log(res);
                if(res.data.errors){
                    setErrors(res.data.errors)
                }else{
                    navigate("/");
                }
                
            }).catch(err => console.log(err));
    }

    return(
        <div className="card bg-info">
            <form  className="col-sm-8 offset-sm-2" onSubmit={createSchedule} >
                <div className="card-header bg-info text-light mt-3 lead">Add a New Event to your Schedule:</div>
                <div className="card-body bg-info">
                    <div className="lead mt-3 m-3">
                        <label>Event:</label>
                        <input type="text" className="form-control" onChange={e => setActivity(e.target.value)} />
                        { errors.activity ? <p className="text-danger">{errors.activity.properties.message}</p>: "" }
                    </div>

                    <div className="lead mt-3 m-3">
                        <label>Description:</label>
                        <textarea className="form-control" onChange={e => setDesc(e.target.value)}></textarea>
                        {errors.desc ? <p className="text-danger">{errors.desc.properties.message}</p>: ""}
                    </div>
                    <div className="lead mt-3 m-3">
                        <label>Start:</label>
                        <input type="datetime-local" className="form-control" onChange={e => setStart(e.target.value)} />
                        {errors.start ? <p className="text-danger">{errors.start.properties.message}</p>: ""}

                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="lead mt-3 m-3">
                                <label>Duration</label>
                                <input type="number" className="form-control" onChange={e => setDuration(e.target.value)} value={duration} />
                                {errors.duration ? <p className="text-danger">{errors.duration.properties.message}</p>: ""}

                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="lead mt-3 m-3">
                                <label>Units</label>
                                <select className="form-control" onChange={e => setTimeunits(e.target.value)}>
                                    <option>minutes</option>
                                    <option>hours</option>
                                    <option>days</option>
                                </select>
                            </div>
                        </div>
                    </div> 
                    <input type="submit" className="btn btn-primary mt-4" value="Add to Schedule" />
                </div>
            </form>
        </div>
        
    )

}

export default ScheduleForm;