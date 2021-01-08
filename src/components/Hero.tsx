import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
    const [header, setHeader] = useState(null);
    const [content, setContent] = useState(null);
    const [cta, setCta] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/api/cms")
            .then(res => res.json())
            .then(
                (result) => {
                    setHeader(result.header);
                    setContent(result.content);
                    setCta(result.cta);
                }
            )
    }, [])

    return (
        <section className="bg-gray-100 flex flex-col sm:flex-row md:w-10/12 xl:w-9/12 sm:shadow-xl p-8 sm:p-12 lg:p-14 xl:pr-16 sm:rounded-xl text-center sm:text-left">
            <div className="flex flex-col sm:pr-12 lg:pr-20 xl:pr-32 2xl:pr-44">
                <h1 className="font-serif text-3xl lg:text-4xl 2xl:text-5xl pb-5 lg:pb-7">
                    {header}
                </h1>
                <p className="font-sans text-lg pb-5 lg:pb-10 xl:pb-12">
                    {content}
                </p>
                <button className="bg-gradient-to-t sm:bg-gradient-to-l from-yellow-400 to-yellow-600 text-white text-xl xl:text-2xl transform transition duration-500 hover:scale-1 py-4 px-4 rounded-md mb-10 md:mb-0">
                    <a 
                        href="https://twinkleintime.com/create/" 
                        target="_blank">
                            {cta}
                    </a>
                </button>
            </div>
            <div className="">
                <Image
                    src="/images/hero.png"
                    alt="Star Map by Twinkle in Time"
                    width={573}
                    height={767}
                />
            </div>
        </section>
    );
}