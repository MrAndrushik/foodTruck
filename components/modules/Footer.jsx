import logo from "../../public/img/foodtruck-logo.svg";
import instagram from "../../public/img/instagram.svg";
import facebook from "../../public/img/facebook.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer-top">
                    <div className="foter-top__social">
                        <Image alt="facebook" src={facebook} />
                        <Image alt="instagram" src={instagram} />
                    </div>
                    <div className="footer-top__logo-block">
                        <span className="footer-top__text">фудтраки</span>
                        <div className="footer-top__logo">
                            <Image src={logo} alt="foodtruck" />
                        </div>
                        <span className="footer-top__text">в аренду</span>
                    </div>
                    <Link href="tel:89999999999">
                        <div className="footer-top__block">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.0334 11.256L14.6432 12.6727C15.3483 13.2931 15.3278 14.4217 14.5276 14.9134C13.4129 15.5984 12.3309 15.9595 10.8123 15.9968C10.6361 16.0011 10.4596 15.9693 10.2952 15.9059C4.81718 13.7942 1.64407 9.15221 0.145342 5.67912C0.0477347 5.45293 0.0103753 5.20416 0.0472117 4.96057C0.313415 3.20028 1.138 1.83218 1.89808 0.948546C2.40948 0.354024 3.29272 0.468875 3.78931 1.07582L4.94882 2.493C5.4409 3.09443 5.40814 3.98965 4.95051 4.61768C4.77627 4.85679 4.58375 5.13374 4.37762 5.44852C4.13292 5.82221 4.07419 6.29373 4.27092 6.69476C5.24673 8.68394 7.4309 10.4438 8.86062 11.3701C9.23146 11.6104 9.69392 11.6456 10.1088 11.4934L11.526 10.9738C12.0422 10.7845 12.6206 10.8928 13.0334 11.256Z"
                                    fill="#BDBDBD"
                                />
                            </svg>
                            <a className="footer-top__link">8 999 999 99-99</a>
                        </div>
                    </Link>
                </div>
                <div className="footer-bottom">
                    <p className="footer-bottom__text">
                        Все права защищены © 2022 «Фудтраки в аренду»
                    </p>
                    <Link href="/privacy">
                        <a className="footer-bottom__text footer-bottom__text--privacy">
                            Политика конфиденциальности
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
