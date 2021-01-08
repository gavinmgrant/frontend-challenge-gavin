import React from 'react';
import Hero from "../components/Hero";
import Head from 'next/head';

export default function Home() {
    return (
        <div className="container flex items-center mx-auto justify-center sm:h-screen">
            <Head>
                <title>Frontend Challenge</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto+Condensed&display=swap" rel="stylesheet"></link>
            </Head>
            <Hero />
        </div>
    )
}