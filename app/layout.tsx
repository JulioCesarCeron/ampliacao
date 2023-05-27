import "../assets/css/global.css"
import "../assets/css/page.css"

const RootLayout = ({ children }) => {
  return (
    <html lang="pt">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Espaço clínico Ampliação</title>

        <meta
          name="keywords"
          content="Espaço para acompanhamento psicológico"
        />
        <meta
          name="description"
          content="Espaço para acompanhamento psicológico"
        />

        <link href="../assets/img/favicon.png" rel="icon" />
        <link
          href="../assets/img/apple-touch-icon.png"
          rel="apple-touch-icon"
        />

        <link
          id="u-theme-google-font"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
        />
        <link
          id="u-page-google-font"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
        />
      </head>

      <body className="u-body u-overlap u-overlap-transparent u-xl-mode">
        {children}
      </body>
    </html>
  )
}

export default RootLayout
