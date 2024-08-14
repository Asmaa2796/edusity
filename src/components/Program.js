import Aos from "aos";
import { programs } from "./data";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Program = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="program bg-white py-5">
      <div className="container">
        <div className="row">
          {programs.map((program) => {
            return (
              <div
                data-aos={
                  program.id === 1 || program.id === 3 ? "fade-up" : "fade-down"
                }
                className="col-lg-3 col-md-6 col-6"
                key={program.id}
              >
                <div className="program-img mb-2">
                  <img
                    className="main-img"
                    src={program.img}
                    alt={program.id}
                  />
                  <div className="caption">
                    <img className="icon" src={program.icon} alt="" />
                    <p className="text-light mt-2 mb-0">{program.caption}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Program;
