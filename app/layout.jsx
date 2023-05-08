import Nav from '@components/Nav';
import '@styles/global.css';
import Head from './head';
import Home from './page';

export const metadata = {
  title: 'AI-Flow',
  description: 'Discover & Share AI Prompts',
};

const Layout = ({ Children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Head />
          <Nav />
          <Home />
          {Children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
