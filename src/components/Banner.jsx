import ReactTyped from "react-typed";

export default function Banner() {
  return (
    <div className="bg-[#301934] w-full py-[100px] text-white">
      <div className="max-w-[1240px] mx-auto text-center">
        <div className="font bold md:text-2xl text-[20px] md:mb-4">
          Find tournament
        </div>
        <h2 className="font-bold md:text-[50px] text-3xl">Earn Prize Money</h2>
        <div className="md:text-[40px] text-2xl md:mt-8">
          Play
          <ReactTyped 
          className="pl-3"
          strings={["Brawllhalla","Valorant","Pubg Mobile","Mobile Legends"]} 
          typeSpeed={100} 
          loop={true}
          backSpeed={50}
          />
        </div>
      </div>
    </div>
  );
}
