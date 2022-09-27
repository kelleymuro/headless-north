import Head from 'next/head';
import Nav from './Nav';
export default function Layout({ title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords}/>
                <meta name='description' content={description}/>
            </Head>
            <Nav/>
            { children }
        </div>
    )
}

Layout.defaultProps = {
    title: 'Fake Nike Store by North Commerce',
    description: 'The fastest ecommerce store with a WordPress (North Commerce) backend',
    keywords: 'ecommerce, nike, headless, wordpress, awesomeness'
}