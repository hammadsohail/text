import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Navbar } from "./../components/Navbar";
import { ImageSwiper } from "./../components/Carousel";
import { CategorySlider } from "./../components/CategorySlider";
import { Promotions } from "./../components/Promotions";
import { RecomendedSlider } from "./../components/RecomendedSlider";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const categories = [
    {
      id: 1,
      image: "https://f.nooncdn.com/mpcms/EN0001/assets/5d2e037c-d677-4f1a-a7e3-86690a46ff59.png",
    },
    {
      id: 2,
      image: "https://f.nooncdn.com/mpcms/EN0001/assets/057d7480-a830-40fd-b253-450de2e07abb.png",
    },
    {
      id: 3,
      image: "https://f.nooncdn.com/mpcms/EN0001/assets/a079af80-5348-4e33-a87c-7825432c17ac.png",
    },
    {
      id: 4,
      image: "https://f.nooncdn.com/mpcms/EN0001/assets/a079af80-5348-4e33-a87c-7825432c17ac.png",
    },
    {
      id: 5,
      image: "https://f.nooncdn.com/mpcms/EN0001/assets/b680acd9-5df4-40e4-b14c-fa7fe0fe84c3.png",
    },
    {
      id: 6,
      image: "https://f.nooncdn.com/mpcms/EN0001/assets/c9289a52-80e4-46ce-9a39-47c408ea902a.png",
    },
    {
      id: 7,
      image: "https://f.nooncdn.com/mpcms/EN0001/assets/d398aa22-c9ee-4f7f-9b71-8c74163f79f8.png",
    },
    {
      id: 8,
      image: "https://f.nooncdn.com/mpcms/EN0001/assets/beffdc53-26ca-45b1-b3d5-84c1a0909903.png",
    },
    {
      id: 9,
      image: "https://f.nooncdn.com/mpcms/EN0001/assets/beffdc53-26ca-45b1-b3d5-84c1a0909903.png",
    },
    {
      id: 10,
      image: "https://f.nooncdn.com/mpcms/EN0001/assets/daaee684-f30a-4896-9f8b-02405aec5dca.png",
    },
    {
      id: 11,
      image: "https://f.nooncdn.com/mpcms/EN0001/assets/fa424b75-dd11-4939-80c3-5090e0d691e7.png",
    },
    {
      id: 12,
      image: "https://f.nooncdn.com/mpcms/EN0001/assets/ed889b28-66e2-4ee0-aa41-be4c885ca396.png",
    },
    {
      id: 13,
      image: "https://f.nooncdn.com/mpcms/EN0001/assets/1e51e3ef-2992-47b8-b256-8f9ffd77f968.png",
    },
    {
      id: 14,
      image: "https://f.nooncdn.com/mpcms/EN0001/assets/1e51e3ef-2992-47b8-b256-8f9ffd77f968.png",
    },

  ];

  const recomended = [
    {
      id: 1,
      name: "AXE Pack of 6 Dark Temptation Deodrant Body 1",
      price: 300,
      discount: 59,
      original: 106,
      image: "https://f.nooncdn.com/products/tr:n-t_240/v1658476216/N31922484A_1.avif",
      express: 'https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg',
      ratings: 4.3,
      reviews: 56,
    },

    {
      id: 2,
      price: 300,
      discount: 59,
      original: 106,
      name: "AXE Pack of 6 Dark Temptation Deodrant Body 4",
      image: "https://f.nooncdn.com/products/tr:n-t_240/v1613666782/N11200839A_1.avif",
      express: 'https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg',
      ratings: 4.3,
      reviews: 56,
    },
    {
      id: 3,
      price: 300,
      discount: 59,
      original: 106,
      name: "AXE Pack of 6 Dark Temptation Deodrant Body 1",
      image: "https://f.nooncdn.com/products/tr:n-t_240/v1653984207/N53329181A_1.avif",
      express: 'https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg',
      ratings: 4.3,
      reviews: 56,
    },
    {
      id: 4,
      price: 300,
      discount: 59,
      original: 106,
      name: "AXE Pack of 6 Dark Temptation Deodrant Body 1",
      image: "https://f.nooncdn.com/products/tr:n-t_240/v1667903026/N43455815A_5.avif",
      express: 'https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg',
      ratings: 4.3,
      reviews: 56,
    },
    {
      id: 5,
      price: 300,
      discount: 59,
      original: 106,
      name: "AXE Pack of 6 Dark Temptation Deodrant Body 1",
      image: "https://f.nooncdn.com/products/tr:n-t_240/v1667497489/N47626990A_1.avif",
      express: 'https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg',
      ratings: 4.3,
      reviews: 56,
    },
    {
      id: 6,
      price: 300,
      discount: 59,
      original: 106,
      name: "AXE Pack of 6 Dark Temptation Deodrant Body 1",
      image: "https://f.nooncdn.com/products/tr:n-t_240/v1669724765/N40633047A_1.avif",
      express: 'https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg',
      ratings: 4.3,
      reviews: 56,
    },
    {
      id: 7,
      price: 300,
      discount: 59,
      original: 106,
      name: "AXE Pack of 6 Dark Temptation Deodrant Body 1",
      image: "https://f.nooncdn.com/products/tr:n-t_240/v1669724765/N40633047A_1.avif",
      express: 'https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg',
      ratings: 4.3,
      reviews: 56,
    },

  ];

  const images = [
    {
      src: "https://f.nooncdn.com/mpcms/EN0001/assets/383c2895-9091-41c2-94ef-424c25c18507.png",
      alt: "Image 1",
    },
    {
      src: "https://f.nooncdn.com/mpcms/EN0001/assets/b0024d83-e8af-4eec-ad7c-b703bfdbe87a.png",
      alt: "Image 2",
    },
    {
      src: "https://f.nooncdn.com/mpcms/EN0001/assets/e0bf5428-90c7-4ca9-a3c4-54b97e099bc6.png",
      alt: "Image 3",
    },
  ];

  const currentYear = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>My Website</title>
      </Head>
      <Navbar />
      <div className=" mx-auto min-h-screen flex flex-col bg-slate-100">
        <main className="sm:flex-grow">
          {/* image slider */}


            <div className="align-baseline box-border	">
              <ImageSwiper images={images} />
            </div>



          {/* categories */}

          <div className="bg-white px-5">
            <CategorySlider categories={categories} />
          </div>

          {/* promotions */}

          <div className=" sm:grid grid-cols-3 gap-5 my-5 mx-5">
            <Promotions />
          </div>

          {/* Recomended for you */}

          <h1 className="text-3xl  sm:text-5xl font-bold mx-10 mt-10 text-gray-700">Recomended for you</h1>

          <div className="bg-[#F1F4FD] mx-5 mt-10">
            <RecomendedSlider categories={recomended} />
          </div>




        </main>
        <footer className="text-center p-4">
          &copy; {currentYear} My Website
        </footer>
      </div>
    </>
  );
}
