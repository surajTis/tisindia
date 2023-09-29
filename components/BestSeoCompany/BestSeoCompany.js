import parse from 'html-react-parser';
export const BestSeoCompany = ({ bestSeoCompanyBlock, bestSeoCompanyBlocksWithGrid }) => {
    return (
        <>
            <div className="best-seo-company-in-india">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {parse(bestSeoCompanyBlock)}
                        </div>
                    </div>
                    <div className="row">
                        {(bestSeoCompanyBlocksWithGrid || []).map((item, i) => (
                            <div className={"col col-lg-"+item.bestSeoCompanyBlocksGrid} key={i}>
                                <div className="box blue">
                                    {parse(item.bestSeoCompanyBlocksContent)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
