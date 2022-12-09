import Image from 'next/image';
import Logo from '../images/logo.png'
import Partners1 from '../images/partners1.png'
import Partners2 from '../images/partners2.png'
import Partners3 from '../images/partners3.png'

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
                                        <p>Info:338 8108781 Lega Ercole</p>
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
                    <div className="footer-bottom ">
                        <ul className='flex justify-center flex-col'>
                            <li className='text-3xl font-semibold my-4'>Partners:</li>
                            <li className='mb-4'>
                                <Image
                                    src={Partners1}
                                    alt='partners1 '
                                />
                            </li>
                            <li className='mb-4'>
                                <Image
                                    src={Partners2}
                                    alt='partners2 '
                                />
                            </li>
                            <li>
                                <Image
                                    src={Partners3}
                                    alt='partners3 '
                                />
                            </li>

                        </ul>
                        <p>Sede operativa via Borgo Dell’Ore,<br /> 1  Palazzuolo sul Senio (FI)
                        </p>

                    </div>
                </div>



            </footer>
        </div>
    );
}