import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import moment from 'moment';


const Dashboard = props => {

    const [activities, setActivities] = useState([]);

    const GetActivities = () => {
        axios.get("http://localhost:8000/api/schedule")
            .then(res => {
                console.log(res)
                setActivities(res.data);
            })
            .catch(err => console.log(err));

    }
    const remove = _id => {
        axios.delete(`http://localhost:8000/api/schedule/${_id}`)
            .then(res => {
                console.log(res);
                GetActivities();
            })
            .catch(err => console.log(err));
    }

    useEffect( () => {
        GetActivities();
    }, []);

    return(
            <div className="justify-content-center my-3 m-5">
                {activities.map( (act, i) => 
                    <div className="card text-left mb-4">
                        <div className="card-header bg-dark text-primary lead">{act.activity}</div>
                        <div className="card-body">
                            <p>Description: {act.desc}</p>
                            <p>Start: {moment(act.start).format('MMMM Do YYYY, h:mm:ss a')}</p>
                            <p>Duration: {act.duration} {act.timeunits}</p>
                            <Link className="btn btn-outline-primary" to={`/edit/${act._id}`}>Edit</Link>
                        <button className="btn btn-outline-danger float-right" onClick={e => remove(act._id)}>Remove</button>

                        </div>
                        

                    </div>
                )}
       
            </div>    
    )
}
export default Dashboard;