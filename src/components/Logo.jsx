import { useNavigate } from 'react-router-dom';
import helpers from '../helpers';
import LogoIcon from "../assets/icons/logo.svg";

const Logo = () => {
    const navigate = useNavigate();

    const onLogoClick = () => {
        helpers.scrollTop();
        navigate('/')
    }

    return (
        <img src={LogoIcon} alt="logo" className='mb-2 clickable p-2 w-[200px] bg-white bg-opacity-50 rounded-[1.1rem]' onClick={onLogoClick} />
    );
}

export default Logo;