import logo from '../../img/piacianni-logo-white.png';
import Brand from '../Brand'
import Navigation from './Navigation';

function Header() {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <Brand source={logo} />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;