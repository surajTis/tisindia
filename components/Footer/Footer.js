import parse from 'html-react-parser';
export const Footer = ({ items }) => {

    let footerSocialLinks = items.footerSocialLinks.footerSocialLinks;
    let footerQuickLinks = items.footerQuickLinks.footerQuickLinks;

    return (
        <>
            <footer className="footer">
                Footer
            </footer>
        </>
    );
}