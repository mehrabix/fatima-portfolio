import { NextSeo } from "next-seo";
import Header from "../../components/header";

const index = () => {
  return (
    <>
      <NextSeo
        title="Fatima Aghajani | Graphic And UI designer"
        description="Fatima Aghajani is a Graphic And UI Designer"
      />
      <Header
        dir="ltr"
        pageTitle="Fatima Aghajani"
        aboutMeText="About"
        aboutMeLink="#responsive-header"
        portfolioText="Portfolio"
        portfolioLink="#"
        blogText="Blog"
        blogLink="#"
        contactText="Contact"
        contactLink="#"
        langText="FA"
        langLink="#"
      />
    </>
  );
};
export default index;
