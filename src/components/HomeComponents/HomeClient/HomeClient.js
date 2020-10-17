import React from 'react';

const HomeClient = () => {
    const imgStyle = {
        width: '100px',
        height: '36px'
    }
    return (
        <section className="container my-5 pt-5">
            <div className="row d-flex justify-content-around">
                <div className="client col-md-2 col-sm-2 offset-md-1 text-center">
                    <img src="https://i.imgur.com/xvb7SY0.png" alt="slack" className="img-fluid my-2" style={imgStyle} />
                </div>
                <div className="client col-md-2 col-sm-2 text-center">
                    <img src="https://i.imgur.com/gL74jds.png" alt="google" className="img-fluid my-2" style={imgStyle} />
                </div>
                <div className="client col-md-2 col-sm-2 text-center">
                    <img src="https://i.imgur.com/WH8YXDE.png" alt="uber" className="img-fluid my-2" style={imgStyle} />
                </div>
                <div className="client col-md-2 col-sm-2 text-center">
                    <img src="https://i.imgur.com/FcU1v0c.png" alt="netflix" className="img-fluid my-2" style={imgStyle} />
                </div>
                <div className="client col-md-2 col-sm-2 text-center">
                    <img src="https://i.imgur.com/ZzVH0K9.png" alt="airbnb" className="img-fluid my-2" style={imgStyle} />
                </div>

            </div>
        </section>
    );
};

export default HomeClient;