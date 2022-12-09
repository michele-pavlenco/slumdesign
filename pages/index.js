import Head from 'next/head';
import Image from 'next/image';
import Logo from '../images/logo.png'
import QrCode from '../images/qrcode.png'
import Card1 from '../images/armonia1.jpeg'
import Card2 from '../images/armonia2.jpeg'
import Card3 from '../images/armonia3.jpeg'
import Card4 from '../images/armonia4.jpeg'
import Card5 from '../images/armonia5.jpeg'
import Card6 from '../images/armonia6.jpeg'
import Card7 from '../images/armonia7.jpeg'
import Card8 from '../images/armonia8.jpeg'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Degustando Italia | Home page</title>
                <meta name="description" content="Degustando Italia home page" />
                <meta name="keywords" content="home,food," />
            </Head>
            <section className='jumbotron' >
                <div className='opacity flex flex-col justify-around'>
                    <Image
                        src={Logo}
                        alt='logo'
                        width={200}
                        height={500}
                    />
                    <h1 className='text-4xl font-bold text-center'  > Degustando Italia </h1>
                </div>

            </section>
            <section className='about_us flex flex-wrap'>
                <div className='about_us_card p-9'>
                    <Image
                        src={Logo}
                        alt='logo'
                        width={300}
                        height={300}
                    />
                    <p className='font-light text-xl sm:text-4xl'>La Società DEGUSTANDO ITALIA s.b. Srl si occupa di promuovere nel territorio mondiale il marchio DEGUSTANDO ITALIA ed i marchi collegati, al fine di valorizzare i prodotti e servizi del territorio.</p>
                </div>
                <div className='about_us_card'>
                    <div className='about_us2_image'></div>
                </div>
                <div className='about_us_card'>
                    <div>
                        <Image
                            src={Logo}
                            alt='logo'
                            width={190}
                            height={190}
                        />
                        <div className='about_us_3container'>
                            <div className='about_us3_image'>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about_us_card py-5 sm:text-2xl px-8 font-light text-base '>
                    Oggi vi portiamo nel mondo del turismo, nel mondo di chi ama l’Italia e vuole ricercare la qualità della vita per vivere una vita di qualità.
                    Il progetto Degustando Italia nasce con lo scopo di mettere al centro le persone che vivono e lavorano nel territorio, che si occupano di turismo e non solo.
                    Tutte quelle persone che hanno tanto da raccontare e tanto da offrire con le loro imprese e le loro attività.
                    <div className='text-center  flex flex-col items-center'>
                        <h2 className='font-bold text-3xl py-3'>Visita il sito</h2>
                        <Image
                            src={QrCode}
                            alt='logo'
                            width={80}
                            height={80}
                        />
                    </div>
                </div>
                <div className='about_us_card  mt-20 px-9 '>
                    <h2 className='font-semibold text-4xl my-3'>
                        Il Cerchio <br />  dell' Armonia
                    </h2>
                    <p className='text-xs max-h-screen'>
                        Il cerchio è la figura geometrica che nella sua semplicità – non ha angoli, non ha spigoli – simboleggia la perfezione, l’armonia, la pienezza e l’unione: non ha interruzione, non ha fratture. Tanti punti, uno accanto all’altro, tutti legati tra loro ed egualmente distanti dal centro. In cerca della qualità della vita, lontano dai ritmi frenetici della città, ho intrapreso un lungo viaggio alla ricerca del Cerchio dell’Armonia e finalmente l’ho trovato…l’ho trovato tra le montagne dell’appennino Tosco Romagnolo. Ho raccolto immagini e suggestioni ricche di lussureggiante natura, di cieli azzurri, di aria pulita, di gustosi prodotti della terra, di storia e tradizione, di calorosa ospitalità, di amore e di pace. Seguimi in questo viaggio, ricco di emozioni e di naturale energia… Ti mostrerò come questi punti, tutti tra loro legati e collegati, formino Il Cerchio dell’Armonia di Degustando Italia.
                    </p>
                </div>
                <div className='about_us_card pt-8'>
                    <div className='about_us5_image'></div>
                </div>
            </section >
            <section className='cerchio-dell-armonia'>
                <div className=' container'>
                    <h2 className='text-center font-semibold text-3xl pb-5'>Il cerchio dell Armonia</h2>
                    <div className='cards flex flex-wrap '>
                        <div className='card  flex flex-col items-center py-3'>
                            <Image
                                src={Card1}
                                alt='image '
                            />
                            <p className='pt-3'>Natura</p>
                        </div>
                        <div className='card flex flex-col items-center py-3'>
                            <Image
                                src={Card2}
                                alt='image '
                            />
                            <p className='pt-3'>Tradizione</p>
                        </div>
                        <div className='card flex flex-col items-center py-3'>
                            <Image
                                src={Card3}
                                alt='image '
                            />
                            <p className='pt-3'>Pace</p>
                        </div>
                        <div className='card flex flex-col items-center py-3'>
                            <Image
                                src={Card4}
                                alt='image '
                            />
                            <p className='pt-3'>Benessere</p>
                        </div>
                        <div className='card flex flex-col items-center  py-3'>
                            <Image
                                src={Card5}
                                alt='image '
                            />
                            <p className='pt-3'>Cucina</p>
                        </div>
                        <div className='card flex flex-col items-center  py-3'>
                            <Image
                                src={Card6}
                                alt='image '
                            />
                            <p className='pt-3'>Calore</p>
                        </div>
                        <div className='card flex flex-col items-center  py-3'>
                            <Image
                                src={Card7}
                                alt='image '
                            />
                            <p className='pt-3'>Intimità
                            </p>
                        </div>
                        <div className='card flex flex-col items-center py-3'>
                            <Image
                                src={Card8}
                                alt='image '
                            />
                            <p className='pt-3'>Energia</p>
                        </div>

                    </div>

                </div>

            </section>
        </div >


    );
}