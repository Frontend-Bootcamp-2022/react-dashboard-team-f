import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMessage, faBell, faGear } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header-container">
      <h2 className="header-logo">Projects</h2>
      <div className="header-search">
      <FontAwesomeIcon className="search-icon" icon={ faSearch }/>
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="header-right">
        <div className="button-container">
          <span className="icons">
          <FontAwesomeIcon className="messag-icon" icon={ faMessage }/>
          </span >
          <span className="icons">
          <FontAwesomeIcon className="bell-icon" icon={ faBell }/>
          </span >
          <span className="icons">
          <FontAwesomeIcon className="gear-icon" icon={ faGear }/>
          </span >
        </div>
        <div className="user-information">
          <img className="profile-image" src="https://avatars.githubusercontent.com/u/86659887?v=4" alt="profile" />
          <div className="user-info">
            <span className="user-name">Bal-Elsada</span>
            <span className="user-email">BalElsadaHasun@gmaill.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
