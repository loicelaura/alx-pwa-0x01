import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
        {/* Android/Chrome */}
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
        {/* Microsoft */}
        <meta name="msapplication-TileImage" content="/icons/ms-icon-310x310.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
