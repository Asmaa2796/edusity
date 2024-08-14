import { pricingTable } from "./data";

const Pricing = () => {
 
  return (
    <div className="pricing py-5">
      <div className="container">
        <img className="dot1 dot" src={"../assets/dots.png"} alt="" />
        <img className="dot2 dot" src={"../assets/dots1.png"} alt="" />
        <div className="row">
          {pricingTable &&
            pricingTable.map((pricePLan) => {
              return (
                <div className="col-lg-4 col-md-4 col-12"
                data-aos={
                  pricePLan.id === 1 || pricePLan.id === 3 ? "fade-up" : "fade-down"
                }
                 data-aos-delay="300"
                 key={pricePLan.id}>
                  <div
                    className={`pricing-plan p-4 bg-white text-center ${
                      pricePLan.plan === "PRO" ? "border-pro" : ""
                    }`}
                  >
                    <img className="pricing-img" src={pricePLan.img} alt="" />
                    <h4 className="text-color">{pricePLan.plan}</h4>
                    <small>{pricePLan.limit}</small>
                    <h3 className="text-color">{pricePLan.price}</h3>
                    <small>{pricePLan.per}</small>
                    <ul className="list-unstyled p-0">
                      {pricePLan.info.map((li) => {
                        return (
                          <li key={li.id}>
                            <img src={"../assets/check.png"} alt="" />
                            {li.txt}
                          </li>
                        );
                      })}
                    </ul>
                    <button
                      className={`button ${
                        pricePLan.plan === "PRO" ? "btn-pro" : ""
                      } shadow-sm`}
                    >
                      Subscribe <img src={"../assets/right.png"} alt="" />
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
