import { useState } from "react";

const ContactUs = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "10edd9e2-29b5-49ee-b8a7-63ebd34d84b9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact-us pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="contact-text" data-aos="fade-up" data-aos-delay="300" >
              <h3>Send us a message</h3>
              <p className="line-height">
                Feel free to reach out through contact form or find our contact
                information below. Your feedback, questions, and suggestions are
                important to us as we strive to provide exceptional service to
                our university community.
              </p>
              <ul className="list-unstyled">
                <li>
                  <img
                    src={"../assets/contact-2.png"}
                    alt=""
                    className="play-icon"
                  />
                  <span> example@edusity.com</span>
                </li>
                <li>
                  <img
                    src={"../assets/contact-1.png"}
                    alt=""
                    className="play-icon"
                  />
                  <span> Edusity address</span>
                </li>
                <li>
                  <img
                    src={"../assets/contact-3.png"}
                    alt=""
                    className="play-icon"
                  />
                  <span> +2 00000000</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <form onSubmit={onSubmit} data-aos="fade-down" data-aos-delay="300" >
              <label>Name:</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
              />
              <label>Notes:</label>
              <textarea placeholder="Type your message" name="message" required></textarea>
              <button className="button shadow-sm text-sm">Submit <img src={"../assets/arrow.png"} alt="" /></button>
            </form>
            <span className="text-success m-3 d-block">{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
