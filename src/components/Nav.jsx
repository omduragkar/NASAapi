
const Nav = () => {
    const newdata = ()=>{
        localStorage.clear();
        window.location.reload(true);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">NASA API By Om</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                    <a className="nav-link" href="https://github.com/omduragkar/NASAapi" target={"_blank"} rel="noreferrer"><i class="fab fa-github"></i> Link to Github Folder</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Link to my Profiles
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="https://www.linkedin.com/in/omaduragkar/" target={"_blank"} rel="noreferrer"><i class="fab fa-linkedin"></i> Linkedin</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li>
                        <a className="dropdown-item" href="https://github.com/omduragkar" target={"_blank"} rel="noreferrer"><i class="fab fa-github"></i> Link to My Github Account</a>
                        </li>
                    </ul>
                    </li>
                </ul>
            </div>
            <div className='d-flex text-end'>
                <button className="btn btn-success" onClick={newdata}>Click to refresh new data</button>
            </div>
        </div>
    </nav>
    )
}

export default Nav
