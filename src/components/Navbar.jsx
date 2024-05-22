import logo from '../images/on_platform_logo_dark.svg';
import { useNavigate } from 'react-router-dom';

function Navbar({ isLogin, setIsLogin }) {
    const navigate = useNavigate();

    const handleAuth = () => {
        if (!isLogin) {
            navigate('/signin');
        } else {
            setIsLogin(false);
        }
    };

    return (
        <>
            <div className='bg-black text-white flex justify-between items-center p-4'>
                <img className='w-15' src={logo} alt='logo' />
                <button onClick={handleAuth} className="bg-custom-blue text-li-blue py-2 px-4 rounded">
                    {isLogin ? 'Sign Out' : 'Sign In'}
                </button>
            </div>
            <hr className="w-full border-gray-500" />
        </>
    );
}

export default Navbar;
