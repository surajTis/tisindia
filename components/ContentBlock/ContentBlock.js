import parse from 'html-react-parser';
export const ContentBlock = ({ ContentBlockTitle, ContentBlockDescription }) => {
    return (
        <>
            <div className="best-seo-agency">
                <div className="container">
                    <h2 data-aos="fade-up" className="aos-init aos-animate">{parse(ContentBlockTitle)}</h2>
                    {parse(ContentBlockDescription)}
                </div>
            </div>
        </>
    );
}