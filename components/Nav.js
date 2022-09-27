import hamburger from '../images/hamburger.png';
import Link from 'next/link';
import logo from '../images/logo.png';
import search from '../images/search.png';
import user from '../images/user.png';
import cart from '../images/cart.png';
import closeBtn from '../images/close-btn.png';
import { useSnapshot } from 'valtio';
import  store  from '../store';


export default function Nav() {
    const snap = useSnapshot(store.cartItem);
    console.log(snap);
    return (
        <header className="header-area"> 
            <div className="header-main">
                <div className="container">
                    <div className="header-item">
                        <div className="header-left">
                            <ul>
                                <li><a href="#"><img src={hamburger.src} alt="" className="hamb-icon"/></a></li>
                                <li><Link href="/"><img src={logo.src} alt="" className="logo-nike"/></Link></li>
                            </ul>
                        </div>
                        <div className="header-right">
                            <ul>
                                <li><a href="#"><img src={search.src} alt=""/></a></li>
                                <li><a href="#"><img src={user.src} alt=""/></a></li>
                                <li class="cart-icon-container"><Link href="/cart"><img src={cart.src} alt=""/></Link><span class="cart-qty">{snap.length}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className="sidemenu">
                    <div className="close-btn">
                        <a href="#">
                            <img src={closeBtn} alt=""/>
                        </a>
                    </div>
                    <ul>
                        <li><a href="#">New Releases <i className="fas fa-chevron-right"></i></a></li>
                        <li><a href="#">Sale <i className="fas fa-chevron-right"></i></a></li>
                        <li><a href="#">Custom <i className="fas fa-chevron-right"></i></a></li>
                        <li><a href="#">Men <i className="fas fa-chevron-right"></i></a></li>
                        <li><a href="#">Women <i className="fas fa-chevron-right"></i></a></li>
                        <li><a href="#">Kids <i className="fas fa-chevron-right"></i></a></li>
                    </ul>
                </div> */}
            </div>
        </header>
    )
}
