import { useNavigate } from 'react-router-dom';
import helpers from '../helpers';
import LogoIcon from "../assets/img/logo.png";

const Logo = () => {
    const navigate = useNavigate();

    const onLogoClick = () => {
        helpers.scrollTop();
        navigate('/')
    }

    return (
        <img className="mb-2 clickable" onClick={onLogoClick} src={LogoIcon} />
    );
}

export default Logo;