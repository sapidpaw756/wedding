import logo from '../images/Zelfie.png';
import bg from '../images/bg-img.jpg';
import '../scss/header.scss';

const navCollapse = () => {
   document.body.classList.toggle('nav-collapse');
}

  
const onLoad = () =>{
  window.addEventListener('resize', function(event) {
    if(this.window.innerWidth >= 992){
      document.body.classList.remove('nav-collapse');
    }
  }, true);
}




const Header = () => {

  const activeNav = (e) =>{
    document.querySelectorAll('.nav-header a').forEach(i => { i.classList.remove('active') });

    e.target.classList.toggle('active');
    document.body.classList.remove('nav-collapse');
  }

  return (
    <div id="Home">
        <div className="nav-header">
            <div className="content">
                <div className="col-12 d-flex p-0 justify-content-between">
                <div className="nav-logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="link-list">
                    <ul className="d-flex">
                    <li><a href="#Home" onClick={activeNav}>Home</a></li>
                    <li><a href="#Image" onClick={activeNav}>Image</a></li>
                    </ul>
                </div>
                <button onClick={navCollapse} type="button" className="navbar-toggle">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                </div>
            </div>
        </div>
        <div className="bg-container">
            <img src={bg} className="bg-img" alt="bg" />
        </div>
    </div>
  );
}

document.onreadystatechange = function() {
  if (document.readyState === 'complete') {
      onLoad();
  }
};

export default Header;