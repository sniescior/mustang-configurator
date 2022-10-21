function ConfigurationMenu(props) {

    return (
        <div className={!props.configActive ? 'footer-wrapper hidden' : 'footer-wrapper'}>
            <h2 className="title-wrapper">
                <i className="bi bi-palette-fill"></i>
                Color palette
            </h2>
            <div className="color-input-wrapper">
                <button className="color-input red selected"></button>
                <button className="color-input blue"></button>
                <button className="color-input green"></button>
                <button className="color-input black"></button>
                <button className="color-input orange"></button>
            </div>
        </div>
    );
}

export default ConfigurationMenu;