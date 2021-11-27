import { NextSeo } from 'next-seo';
import Header from '../components/header';

const index = () => (
  <>
    <NextSeo
      title="فاطمه آقاجانی | طراح گرافیک و رابط کاربری"
      description="طراحی گرافیک، طراحی رابط کاربری، تجربه کاربری، طراحی سایت، طراحی لوگو، طراحی کارت پستال، طراحی کارت ویزیت، طراحی جلد کتاب "
    />
    <Header
      dir="rtl"
      pageTitle="فاطمه آقاجانی"
      aboutMeText="درباره من"
      aboutMeLink="#responsive-header"
      portfolioText="نمونه کارها"
      portfolioLink="#"
      blogText="وبلاگ"
      blogLink="#"
      contactText="تماس با ما"
      contactLink="#"
      langText="EN"
      langLink="#"
    />
  </>
);

export default index;