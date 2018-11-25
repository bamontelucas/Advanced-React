import Head from 'next/head';
import React from 'react';

const Meta = () => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width" />
            <meta charset="utf-8" />
            <link rel="shortcut icon" href="/static/favicon.png" />
            <link rel="stylesheet" href="/static/nprogress.css" />
            <title>Sick Fits!</title>
        </Head>
    );
};

export default Meta;
