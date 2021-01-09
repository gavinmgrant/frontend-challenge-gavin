import React from 'react';
import Hero, { HeroProps } from '../components/Hero';
import Head from 'next/head';

export default function Home({ data }) {
    return (
        <div className="container flex items-center mx-auto justify-center sm:h-screen">
            <Head>
                <title>Frontend Challenge</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto+Condensed&display=swap" rel="stylesheet"></link>
            </Head>
            <Hero 
                header={data.header}
                content={data.content}
                cta={data.cta}
                src={data.src}
            />
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`http://localhost:3000/api/cms`);
    const data: HeroProps = await res.json();

    return {
        props: {
            data,
        }
    }
}