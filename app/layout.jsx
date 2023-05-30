import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/global.css';
import Head from './head';

export const metadata = {
  title: 'AI-Flow',
  description: 'Discover & Share AI Prompts',
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Head />
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
