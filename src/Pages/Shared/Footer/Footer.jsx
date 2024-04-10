import siteLogo from "../../../assets/site-logo.png"

const Footer = () => {
    return (
        <div className="bg-[#222736]">
            <footer className="max-w-6xl mx-auto footer p-10 text-base text-[#aaaab3]">
                <aside className="space-y-2">
                   <img src={siteLogo} alt="" />
                    <p className="text-xl">We inspire and reach millions of travelers<br />across 90 local websites.</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;