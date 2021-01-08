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
        <section>
            <div>
                <h1>
                    {header}
                </h1>
                <p>
                    {content}
                </p>
                <button>
                    <a 
                        href="https://twinkleintime.com/create/" 
                        target="_blank">
                            {cta}
                    </a>
                </button>
            </div>
            <div>
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