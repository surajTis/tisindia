import parse from 'html-react-parser';
export const Footer = ({ items }) => {

    let footerSocialLinks = items.footerSocialLinks.footerSocialLinks;
    let footerQuickLinks = items.footerQuickLinks.footerQuickLinks;

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <ul className="social-link">
                        {(footerSocialLinks || []).map((item, i) => (
                            <li key={i}><a href={item.socialLink}><img src={item.socialImage.sourceUrl} alt="instagram" /></a></li>
                        ))}
                    </ul>
                    <ul className="quick-links">
                        {(footerQuickLinks || []).map((item, i) => (
                            <li key={i}><a href={item.footerQuickLinkUrl}><img src={item.footerQuickLinkImage.sourceUrl} alt="phone-icon" />{item.footerQuickLinkText}</a></li>
                        ))}
                    </ul>
                    <ul className="sitemap">
                        <li>© 2022</li>
                        <li>|</li>
                        <li><a href="#">Sitemap</a></li>
                    </ul>
                </div>
            </footer>
        </>
    );
}