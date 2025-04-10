import Button from "./button"

const select = [
    {
        title:"– PRO –",
        cost:"20.000 ₽",
        text:"УМК п робототетхнике и программированию"
    },
    {
        title:"– ROBO –",
        cost:"15.000 ₽",
        text:"УМК по робототетхнике "
    },
    {
        title:"– PROG –",
        cost:"10.000 ₽",
        text:"УМК по программированию"
    }
]

export default function SelectNecessary(){
    return(
        <div className="flex flex-wrap justify-between gap-[20px]">
            {select.map((selc,index)=>{
                return(
                    <div data-aos="fade-right" className="flex flex-col items-center justify-center w-full sm:w-[48%] lg:w-[32%] h-[460px] p-[40px] max-[1220px]:px-[20px] border-1 border-[#14102433] rounded-2xl transition-all duration-300 hover:bg-[#141024] hover:text-white hover:scale-105 hover:shadow-lg" key={index}>
                        <h2 className="font-jost font-semibold text-[30px] mb-[63px]">{selc.title}</h2>
                        <h2 className="font-jost font-semibold text-[50px] mb-[20px]">{selc.cost}</h2>
                        <h2 className="flex-grow font-jost font-normal text-[16px] mb-[61px] text-center">{selc.text}</h2>
                        <Button text={"Оставить заявку"}/>
                    </div>
                )
            })}
        </div>
    )
}