import Head from 'next/head';
import Image from 'next/image';
import Logo from '../images/logo.png'
import AboutUs from '../images/aboutus2.jpeg'

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
                        width={500}
                        height={500}
                    />
                    <p className='font-light text-3xl'>La Società DEGUSTANDO ITALIA s.b. Srl si occupa di promuovere nel territorio mondiale il marchio DEGUSTANDO ITALIA ed i marchi collegati, al fine di valorizzare i prodotti e servizi del territorio.</p>
                </div>
                <div className='about_us_card'>
                    <div className='about_us2_image'></div>
                </div>
                <div className='about_us_card'>
                    <p></p>
                </div>
                <div className='about_us_card'>
                </div>
                <div>

                </div>

            </section>
        </div >


    );
}