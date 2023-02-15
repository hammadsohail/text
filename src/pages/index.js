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
      name: "Category 1",
      image: "https://picsum.photos/seed/1/200/200",
    },
    {
      id: 2,
      name: "Category 2",
      image: "https://picsum.photos/seed/2/200/200",
    },
    {
      id: 3,
      name: "Category 3",
      image: "https://picsum.photos/seed/3/200/200",
    },
    {
      id: 4,
      name: "Category 4",
      image: "https://picsum.photos/seed/4/200/200",
    },
    {
      id: 5,
      name: "Category 4",
      image: "https://picsum.photos/seed/4/200/200",
    },
    {
      id: 6,
      name: "Category 4",
      image: "https://picsum.photos/seed/4/200/200",
    },
    {
      id: 7,
      name: "Category 4",
      image: "https://picsum.photos/seed/4/200/200",
    },
    {
      id: 8,
      name: "Category 4",
      image: "https://picsum.photos/seed/4/200/200",
    },
    {
      id: 9,
      name: "Category 4",
      image: "https://picsum.photos/seed/4/200/200",
    },
    {
      id: 10,
      name: "Category 4",
      image: "https://picsum.photos/seed/4/200/200",
    },
    {
      id: 11,
      name: "Category 1",
      image: "https://picsum.photos/seed/1/200/200",
    },
    {
      id: 12,
      name: "Category 1",
      image: "https://picsum.photos/seed/1/200/200",
    },
    {
      id: 13,
      name: "Category 1",
      image: "https://picsum.photos/seed/1/200/200",
    },
    {
      id: 14,
      name: "Category 1",
      image: "https://picsum.photos/seed/1/200/200",
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

  const currentYear = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>My Website</title>
      </Head>
      <Navbar />
      <div className=" mx-auto min-h-screen flex flex-col bg-slate-300">
        <main className="flex-grow">
          {/* image slider */}


            <div className="flex flex-row w-full">
              <ImageSwiper
                images={[
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
                ]}
              />


              {isMobile ? false : (
              <div className="flex flex-row w-full justify-start">
              <Image
                src="https://f.nooncdn.com/mpcms/EN0001/assets/c6f2bd47-5eca-4908-b3a5-d377e231622a.png"
                width={400}
                height={400}

              />
              <Image
                src="https://f.nooncdn.com/mpcms/EN0001/assets/4b795127-3b55-499d-831b-a361e0eae5b0.png"
                width={400}
                height={400}

              />
            </div>)}



            </div>



          {/* categories */}

          <div className="bg-white">
            <CategorySlider categories={categories} />
          </div>

          {/* promotions */}

          <div className="grid grid-cols-3 gap-10 w-full my-5 mx-5">
            <Promotions />
          </div>

          {/* Recomended for you */}

          <h1 className="text-5xl font-bold mx-10 mt-10 text-gray-700">Recomended for you</h1>

          <div className="bg-[#F1F4FD] w-full mx-5">
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
