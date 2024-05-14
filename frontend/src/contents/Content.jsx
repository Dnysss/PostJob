import CardWithLink from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Post from "../components/Post";
import Hero from "../components/Hero";

const Content = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CardWithLink />
      <Post />
      <Footer />
    </div>
  );
};

export default Content;
