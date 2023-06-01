import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-white text-center">
        <span className="black_gradient">Discover & Share</span>
        <br className="max-md:hidden" />
        <span className="black_gradient"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        AI-Flow is an open source AI prompting tool to discover, create and
        share creative prompts.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
