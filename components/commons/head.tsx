import Head from "next/head";

export default function HeadTags ({title, description}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name='description' content={description}/>
            </Head>
        </>
    )
}