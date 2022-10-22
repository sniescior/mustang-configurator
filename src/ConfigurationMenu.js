function ConfigurationMenu(props) {

    return (
        <div className={!props.configActive ? 'footer-wrapper hidden' : 'footer-wrapper'}>
            <h2 className="title-wrapper">
                <i className="bi bi-palette-fill"></i>
                Color palette
            </h2>
            <div className="color-input-wrapper">
                <button className={props.index == 0 ? "color-input red selected" : "color-input red"} onClick={() => props.setIndex(0)}></button>
                <button className={props.index == 1 ? "color-input blue selected" : "color-input blue"} onClick={() => props.setIndex(1)}></button>
                <button className={props.index == 2 ? "color-input green selected" : "color-input green"} onClick={() => props.setIndex(2)}></button>
                <button className={props.index == 3 ? "color-input black selected" : "color-input black"} onClick={() => props.setIndex(3)}></button>
                <button className={props.index == 4 ? "color-input orange selected" : "color-input orange"} onClick={() => props.setIndex(4)}></button>
            </div>
        </div>
    );
}

export default ConfigurationMenu;