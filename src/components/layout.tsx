import Helmet from 'react-helmet';

export interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
    <Helmet>
        <title>Bienes Raices Gatsby TS</title>
        <meta name='description' content='Sitio web de bienes raices en Gatsby' />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" /> 
    </Helmet>
  {props.children}
  </>
  ) 
}
