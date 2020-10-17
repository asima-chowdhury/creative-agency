import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import AdminServiceList from '../Admin/ServiceList/AdminServiceList';
import Order from '../Customer/Order/Order';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userDetect, setUserDetect] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-plateau-76755.herokuapp.com/showAllAdmin')
            .then(res => res.json())
            .then(data => {
                setUserDetect(data)
            })
    }, [])
    console.log(userDetect)

    return (
        <section className="container my-5 py-5">
            {
                userDetect.map(user => user.email === loggedInUser.email && <AdminServiceList></AdminServiceList>)
            }
            {
                userDetect.map(user => user.email !== loggedInUser.email && <Order></Order>)
            }
        </section>
    );
};

export default Dashboard;