import ConfigurationMenu from "./ConfigurationMenu";

function Footer(props) {
    return (
        <footer className={props.configActive ? 'configuration-menu': ''}>
            <div onClick={() => props.setConfigActive(true)} className={props.configActive ? 'footer-wrapper hidden' : 'footer-wrapper'}>
                <h2>
                    Build Your Mustang
                    <i className="bi bi-arrow-right-short arrow"></i>
                </h2>
                <i className="bi bi-wrench-adjustable"></i>
            </div>

            <ConfigurationMenu configActive={props.configActive} />

        </footer>
    )
}

export default Footer;