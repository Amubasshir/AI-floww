import Nav from '@components/Nav';
import Provider from '@components/Provider';
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
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Head />
            <Nav />
            <Home />
            {Children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
