import Head from 'next/head';
import Image from 'next/image';
import Logo from '../images/logo.png'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Degustando Italia | Home page</title>
                <meta name="description" content="Degustando Italia home page" />
                <meta name="keywords" content="home,food," />
            </Head>
            <section className='jumbotron' >
                <div className='opacity'>
                    {/* <div className=' container'> */}
                    {/* <span></span> */}
                    <Image
                        src={Logo}
                        alt='logo'
                        width={200}
                        height={500}

                    />
                    <h1 className='text-4xl font-bold text-center'  > Degustando Italia </h1>
                    {/* </div> */}
                </div>

            </section>
            <section>
                <div>
                </div>

            </section>
        </div >


    );
}