import { useNavigate } from 'react-router-dom';
import helpers from '../helpers';
import LogoIcon from "../assets/icons/logo.png";

const Logo = () => {
    const navigate = useNavigate();

    const onLogoClick = () => {
        helpers.scrollTop();
        navigate('/')
    }

    return (
        <img src={LogoIcon} alt="logo" className='mb-2 clickable p-2 w-[80px] rounded-[1.1rem]' onClick={onLogoClick} />
    );
}

export default Logo;