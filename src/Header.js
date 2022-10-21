function Header(props) {
    return (
        <header className="App-header">
            <div className='button-wrapper hidden'>
                <a href='#'>contact</a>
            </div>
            <a className="title" href="/">MUSTANG <i className="bi bi-lightning-charge-fill"></i> GARAGE</a>
            <div className='button-wrapper'>
                <a href='https://github.com/sniescior' target={'_blank'}>contact</a>
            </div>
            <button className={props.configActive ?  "close-button" : "close-button hidden"} onClick={() => props.setConfigActive(false)}>
                <i class="bi bi-x-lg"></i>
                Close configurator
            </button>
        </header>
    );
}

export default Header;