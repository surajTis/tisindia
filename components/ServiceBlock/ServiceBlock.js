import parse from 'html-react-parser';
import Image from 'next/image'
export const ServiceBlock = ({ ServiceBlockHeading, serviceBlocks }) => {
    return (
        <>
            <div className="result-oriented-services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 data-aos="fade-up" className="aos-init aos-animate">{parse(ServiceBlockHeading)}</h2>
                        </div>
                    </div>
                    <div className="row">
                        {(serviceBlocks || []).map((item, i) => (
                            <div className="col-lg-4" key={i}>
                                <div className="box aos-init aos-animate" data-aos="fade-up">
                                    <h3>{parse(item.serviceBlockTitle)}</h3>
                                    <p>{parse(item.serviceBlockContent)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}