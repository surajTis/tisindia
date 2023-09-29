import parse from 'html-react-parser';
export const GrowBusiness = ({ growBusinessBlockHeading, growBusinessBlocks }) => {
    return (
        <>
            <div className="grow-your-business">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 data-aos="fade-up">{parse(growBusinessBlockHeading)}</h2>
                        </div>
                        {(growBusinessBlocks || []).map((item, i) => (
                            <div className="col-lg-3" key={i}>
                                <div className="box" data-aos="fade-up">
                                    <h3><img src="images/tips-vector.svg" alt="tips-vector" /> {parse(item.growBusinessBlockTitle)}</h3>
                                    <p>{parse(item.growBusinessBlockContent)}</p>
                                </div>
                            </div>
                        ))}
                
                    </div>
                </div>
            </div>
        </>
    );
}