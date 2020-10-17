import React from 'react';
import './FeedbackDetail.css'
import img from '../../../images/customer-1.png'

const FeedbackDetail = (props) => {
    const { name, companyName, description } = props.feedback;
    return (
        <div className="col-md-4 py-md-3 my-md-3 my-2 ">
            <div className="rounded feedbackDetail">
                <div className="d-flex align-items-center mt-2">
                    <img className="img-fluid mx-3" src={img} alt="feedbackImage" width="60" />
                    <div>
                        <h6 className="font-weight-bold">{name}</h6>
                        <p><small className="text-secondary">{companyName}</small></p>
                    </div>
                </div>
                <div className="feedbackDetail-text p-3">
                    <p className="text-secondary">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackDetail;