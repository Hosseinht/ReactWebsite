import {useEffect} from 'react';
import {useLocation} from 'react-router-dom'

const ScrollTop = () => {
    const {pathname}= useLocation();
    useEffect(() => {
        window.scroll({
            top:0,
            left:0,
        });
    }, [pathname]);
    return null;
}
//When do i want useEffect to run? when url changes. url=pathname
export default ScrollTop;