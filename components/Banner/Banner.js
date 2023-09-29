import parse from 'html-react-parser';
export const Banner = ({ bannerTitle, bannerContent, bannerCta }) => {

    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-6">
                            <h1 data-aos="fade-up" className="aos-init aos-animate">{parse(bannerTitle)}</h1>
                            <p  className="aos-init">{parse(bannerContent)}</p>
                            <a href="#" className="btn aos-init" data-aos="fade-up">Contact Us</a>
                        </div>
                        <div className="col-lg-4">
                            <div className="request-form aos-init aos-animate" data-aos="fade-up">
                                <h2>Request Free Quote</h2>
                                <form>
                                    <div className="form-group">
                                        <input type="text" name="fullname" placeholder="Full Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="phone" placeholder="Phone" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="websitename" placeholder="Website Name" />
                                    </div>
                                    <div className="form-group">
                                        <select>
                                            <option>Select Services</option>
                                            <option>Service 1</option>
                                            <option>Service 2</option>
                                            <option>Service 3</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <textarea placeholder="Message"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" name="sumbit" value="SEND" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}