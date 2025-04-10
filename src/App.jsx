import Button from "./components/button"
import Navbar from "./components/navbar"
import showcase from "./assets/showcase.png"
import Title from "./components/title"
import TrainerSlider from "./components/TrainerSlider "
import SelectNecessary from "./components/selectNecessary"
import Form from "./components/form"
import logo from './assets/logo.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out', // yoki 'ease-in-sine', 'ease-out-cubic'
      once: true,
    });
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar/>
      <main id="home">
        <div className="bg-[#141024] pt-[70px] w-full mb-[120px] max-md:mb-[80px]">
          <div className="container flex items-center max-lg:flex-col gap-1 max-lg:gap-7">
            <div>
              <h2 className="font-jost font-semibold text-[70px] text-white mb-[20px] max-[1441px]:text-[62px] max-lg:text-[45px] max-lg:mb-[10px] max-sm:text-[30px]">ROBO SCHOOL</h2>
              <p className="font-jost font-normal text-[20px] text-white mb-[50px] max-lg:text-[16px]">Курсы повышения квалификации по робототехнике для педагогов начальной школы</p>
              <Button text="Записаться на курс"/>
            </div>

            <img data-aos="fade-right" className="w-[783px] h-auto object-cover mr-[-120px] max-[1500px]:w-[600px] max-[1500px]:mr-[-60px] max-[1330px]:w-[500px] max-[1330px]:mr-0  " src={showcase} alt="showcase" />
          </div>
        </div>

        <div id="school">
          <div className="container">
            <h2 data-aos="fade-right" className="font-jost font-normal text-[30px] text-[#141024] w-[70%] mb-[60px] max-md:w-full max-md:text-[20px] max-md:mb-[50px]"><span className="font-jost font-semibold text-[30px] text-[#141024] max-md:text-[20px]">Robo School –</span> учреждение для формирования кадрового педагогического резерва в сфере робототехникии программирования</h2>
            <div className="flex items-center justify-between gap-[40px] mb-[120px] max-[1200px]:flex-wrap max-[1200px]:justify-start max-md:gap-[20px]">
              <div data-aos="fade-right">
                <p className="font-jost font-semibold text-[70px] text-[#D52027] max-md:text-[60px]">10</p>
                <p className="font-jost font-normal text-[18px] text-[#141024B2] max-md:text-[16px]">УМК по различным направлениям по робототехнике</p>
              </div>
              <div data-aos="fade-right">
                <p className="font-jost font-semibold text-[70px] text-[#D52027] max-md:text-[60px]">20</p>
                <p className="font-jost font-normal text-[18px] text-[#141024B2] max-md:text-[16px]">Школ, в которых запущена робототехника</p>
              </div>
              <div data-aos="fade-right">
                <p className="font-jost font-semibold text-[70px] text-[#D52027] max-md:text-[60px]">100</p>
                <p className="font-jost font-normal text-[18px] text-[#141024B2] max-md:text-[16px]">Педагогов прошедших курсы повышения квалификации</p>
              </div>
              <div data-aos="fade-right">
                <p className="font-jost font-semibold text-[70px] text-[#D52027] max-md:text-[60px]">10 000</p>
                <p className="font-jost font-normal text-[18px] text-[#141024B2] max-md:text-[16px]">Обученных детей на базе собственных центров</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#F9F9F9] py-[100px]">
          <div className="container">
            <Title data-aos="fade-right" title="Что вы получите после курса"/>
            <div className="flex items-center justify-between gap-[40px] mt-[60px] max-lg:gap-[20px] max-md:flex-col">
              <div data-aos="fade-right">
                <h3 className="font-jost font-semibold text-[24px] text-[#141024] mb-[20px] max-sm:text-[20px]">Удостоверение</h3>
                <h3 className="font-jost font-normal text-[18px] text-[#141024B2] max-sm:text-[16px]">Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях</h3>
              </div>

              <div data-aos="fade-right">
                <h3 className="font-jost font-semibold text-[24px] text-[#141024] mb-[20px] max-sm:text-[20px]">Знания</h3>
                <h3 className="font-jost font-normal text-[18px] text-[#141024B2] max-sm:text-[16px]">По основам разработки учебно-методических комплексов
                по робототехнике и программированию</h3>
              </div>
              <div data-aos="fade-right">

                <h3 className="font-jost font-semibold text-[24px] text-[#141024] mb-[20px] max-sm:text-[20px]">Практику</h3>
                <h3 className="font-jost font-normal text-[18px] text-[#141024B2] max-sm:text-[16px]">Возможность пройти практику по преподаванию робототехники на базе R:ED LAB в оффлайн или онлайн формате</h3>
              </div>
            </div>
          </div>
        </div>

        <div id="trener">
          <TrainerSlider/> 
        </div>

        <div id="cost">
          <div className="container">
            <Title title={"Выберите нужный пакет"}/>
            <div className="mt-[80px] mb-[140px] max-sm:mb-[80px]">
              <SelectNecessary/>
            </div>
          </div>
        </div>

        <div id="forms" className="bg-[#D52027] py-[87px] max-sm:py-[60px]">
          <div className="container flex justify-between max-md:flex-col gap-[40px]">
            <div data-aos="fade-right" className="w-[40%] max-md:w-full">
              <p className="font-jost font-semibold text-[36px] max-sm:text-[30px] mb-[20px] text-white">Запишитесь на курс со скидкой 10%</p>
              <p className="font-jost font-normal text-[20px] max-sm:text-[16px] text-white">Акция действительна до 10 марта 2022 года</p>
            </div>

             <Form/>
          </div>
        </div>
      </main>

      <footer>
        <div className="bg-[#141024] py-[40px]">
          <div className="container flex items-start justify-between max-sm:flex-col max-sm:items-center gap-[20px]">
            <div data-aos="fade-right" className="flex flex-col items-center">
              <a href="#"><img className="mb-[15px]" src={logo} alt="logo" /></a>
              <a className="font-jost font-normal text-[16px] text-white mt-[5px]" href="#">© ROBO.SCHOOL</a>
            </div>
            <a className="font-jost font-semibold text-[30px] text-white max-sm:text-[16px]" href="tel:+78000001122">+7 800 000 11 22</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
