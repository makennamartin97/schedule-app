import React, {useState, useEffect} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import moment from 'moment';

const EditSchedule = props => {
    const [activity, setActivity] = useState("");
    const [desc, setDesc] = useState("");
    const [start, setStart] = useState("");
    const [duration, setDuration] = useState(0);
    const [timeunits, setTimeunits] = useState("minutes");
    const [errors, setErrors] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:8000/api/schedule/${props._id}`)
            .then(res => {
                console.log(res);
                setActivity(res.data.activity);
                setDesc(res.data.desc);
                setStart(moment(res.data.start).format('YYYY-MM-DDTHH:mm'));
                setDuration(res.data.duration);
                setTimeunits(res.data.timeunits);
            }).catch(errors => console.log(errors));
    }, [props._id]);

    const UpdateSchedule = e => {
        e.preventDefault();
        const scheduleItem = {activity, desc, start, duration, timeunits};
        axios.put(`http://localhost:8000/api/schedule/${props._id}`, scheduleItem)
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/");
                }
            }).catch(err => console.log(err));
    }
    const remove = () => {
        axios.delete(`http://localhost:8000/api/schedule/${props._id}`)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => console.log(err));
    }

    return(
        <div className="row">
            <form className="col-sm-8 offset-sm-2" onSubmit={UpdateSchedule} >
            <h4 className="text-light mt-4 ">Update Event</h4>

            <div className="form-group lead mt-2 m-3">
                    <label>Event:</label>
                    <input type="text" className="form-control" onChange={e => setActivity(e.target.value)} value={activity}/>
                    { errors.activity ? <p className="text-danger">{errors.activity.properties.message}</p>: "" }

                </div>
                <div className="form-group lead mt-3 m-3">
                    <label>Description:</label>
                    <textarea className="form-control" onChange={e => setDesc(e.target.value)} value={desc}></textarea>
                    {errors.desc ? <p className="text-danger">{errors.desc.properties.message}</p>: ""}
                </div>
                <div className="form-group lead mt-3 m-3">
                    <label>Start:</label>
                    <input type="datetime-local" className="form-control" onChange={e => setStart(e.target.value)} value={start}/>
                    {errors.start ? <p className="text-danger">{errors.start.properties.message}</p>: ""}

                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group lead mt-3 m-3">
                            <label>Duration</label>
                            <input type="number" className="form-control" onChange={e => setDuration(e.target.value)} value={duration}value={duration} />
                            {errors.duration ? <p className="text-danger">{errors.duration.properties.message}</p>: ""}

                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group lead mt-3 m-3">
                            <label>Units</label>
                            <select className="form-control" onChange={e => setTimeunits(e.target.value)} value={timeunits}>
                                <option>minutes</option>
                                <option>hours</option>
                                <option>days</option>
                            </select>
                        </div>
                    </div>
                </div> 
                <input type="submit" className="btn btn-primary mt-4 m-3 float-left" value="Update" />
                <button className="btn btn-danger mt-4 m-3 float-right" onClick={remove}>Delete</button>

                

            </form>
        
        </div>
    )
}

export default EditSchedule;