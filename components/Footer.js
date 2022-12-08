import Logo from '../images/logo.png'

export default function Footer() {
    return (
        <div>
            <footer className="py-10">
                <div className="container flex">
                    <div className="footer-top ">
                        <div className='img-footer-top '></div>
                        <ul className='flex items-baseline'>
                            <li>
                                <ul className='px-5'>
                                    <li><p>Contatti </p></li>
                                    <li>
                                        <p>Info: 338 8108781 Lega Ercole</p>
                                    </li>
                                    <li>
                                        <p>Email: de.italia21@gmail.com</p>
                                    </li>
                                </ul>

                            </li>
                            <li>
                                <ul className='px-5'>
                                    <li> <br /> </li>
                                    <li>
                                        <p>Sede legale: via Lapi, 125</p>
                                    </li>
                                    <li>
                                        <p>   Faenza RA</p>
                                    </li>
                                </ul>

                            </li>
                        </ul>
                    </div>
                    <div className="footer-bottom">
                        ss

                    </div>
                </div>



            </footer>
        </div>
    );
}