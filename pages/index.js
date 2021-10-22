import Head from 'next/head';
import { container } from '../styles/Home.module.css';
import styles from '../styles/Home.module.css';
import { Header } from '../app/components/Header/header';
import { Main } from '../app/components/Main/Main';
import { Footer } from '../app/components/Footer/footer';

export default function Home() {
    return (
        <div className={container}>
            <Head>
                <title>Piepad</title>
                <meta
                    name="description"
                    content="Get your slice of the pie on the sweetest IDO launchpad on the Ethereum network"
                />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
