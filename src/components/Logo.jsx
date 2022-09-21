import { useNavigate } from 'react-router-dom';
import helpers from '../helpers';
import { ReactComponent as LogoIcon } from "../assets/icons/logo.svg";

const Logo = () => {
    const navigate = useNavigate();

    const onLogoClick = () => {
        helpers.scrollTop();
        navigate('/')
    }

    return (
        <LogoIcon className='mb-2 clickable w-[200px] p-2 bg-white' onClick={onLogoClick} />
    );
}

export default Logo;