import React from 'react';
import errorImg from '../../images/error404.gif';

const NotMatch = () => {
    const notMatchStyle = {
        color: 'red',
        textAlign: 'center',
        margin: '0 auto',
        marginTop: '5%',
        padding: '10%',
        boxShadow: '0 0 15px 15px lightgray',
        width: '40%',
        borderRadius: '5px'
    }
    return (
        <div style={notMatchStyle}>
            <h2>404 Error!!!</h2>
            <h3>Route Not Found!!!</h3>
            <img src={errorImg} alt="errorImg" style={{width:'100%',margin:'0 auto'}}/>
        </div>
    );
};

export default NotMatch;