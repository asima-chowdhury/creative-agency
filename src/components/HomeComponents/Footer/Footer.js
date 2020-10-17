import React from 'react';

const Footer = () => {
    
    return (
        <footer className="footer-area clear-both" style={{backgroundColor:' #FBD062'}}>
            <div className="container">
                <div className="row d-flex py-5">
                    <div className="col-md-4 offset-md-1 col-12 col-sm-12">
                        <h3>Let us handle your <br />project, professionally.</h3>
                        <p className="py-3" style={{fontSize:'14px',lineHeight: '24px'}}>With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-6 col-12 col-sm-12">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your email address..." />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your name / company’s name" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="6" placeholder="Your message..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark btn-block">Send</button>
                        </form>
                    </div>
                </div>
                <div className="text-center text-secondary pb-3">
                    <p><small>Copyright Orange labs {(new Date()).getFullYear()} || All Rights Reserved || Asima</small></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;