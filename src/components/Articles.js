// Articles.js
import Card from "./Card";

const Articles = () => {
  return (
    <div className="w-full flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <p className="text-white text-[1.4rem] font-medium text-center mt-4">
          Kalpana Chawla
        </p>
        <div className="flex flex-col items-center justify-center mt-8">
          <Card image={require("../images/k2.jpg")}
          description="Kalpana Chawla was an Indian-American astronaut and the first woman of Indian origin in space,she achieved the historic milestone aboard the Space Shuttle Columbia during the STS-87 mission in 1997."
               />
        </div>
      </div>
      
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <p className="text-white text-[1.4rem] font-medium text-center mt-4">
          Sunita Williams
        </p>
        <div className="flex flex-col object-cover items-center justify-center mt-8">
          <Card image={require("../images/sunita2.png")}
           description="Sunita Williams is an American astronaut of Indian descent. She holds several spacewalking records for a woman and has spent a total of more than 321 days in space, making her one of the most experienced female astronauts."
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <p className="text-white text-[1.4rem] font-medium text-center mt-4">
          Valentina Tereshkova
        </p>
        <div className="flex flex-col items-center justify-center mt-8">
          <Card image={require("../images/v4.jpg")}
          description="Valentina Tereshkova is a retired Russian cosmonaut and the first woman to travel into space. She orbited the Earth 48 times aboard the Vostok 6 spacecraft in 1963."
         />
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <p className="text-white text-[1.4rem] font-medium text-center mt-4">
        Mae Jemison
        </p>
        <div className="flex flex-col items-center justify-center mt-8">
          <Card image={require("../images/m1.jpg")}
          description="Mae Jemison is an American engineer, physician, and NASA astronaut. She became the first African American woman to travel in space when she flew aboard the Space Shuttle Endeavour in 1992."
          />
        </div>
      </div>
    </div>
  );
};

export default Articles;
