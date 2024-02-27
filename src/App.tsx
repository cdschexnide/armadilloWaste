import { useState } from "react";
import "./App.css";
import armadilloLogo from "../src/assets/red-armadillo-logo2.png";
import truck from "../src/assets/truck.png";

function App() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const mapsUrl: string =
    "https://www.google.com/maps/place/Armadillo+Waste+Inc./@29.8435808,-95.6632055,17z/data=!4m14!1m7!3m6!1s0x8640d99bbd67858f:0x1da332384cd068bb!2sArmadillo+Waste+Inc.!8m2!3d29.8435762!4d-95.6606252!16s%2Fg%2F11l2gx5by9!3m5!1s0x8640d99bbd67858f:0x1da332384cd068bb!8m2!3d29.8435762!4d-95.6606252!16s%2Fg%2F11l2gx5by9?entry=ttu";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      message: message,
    };
    console.log("name: ", name);
    console.log("email: ", email);
    console.log("message: ", message);
    try {
      // const response = await fetch("/api/sendEmail", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });
      const response = await fetch("/api/sendNodemail", {
        // Update this URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("response: ", response);
      if (response.ok) {
        alert("Email sent successfully!");
        console.log("Email sent successfully");
      } else {
        alert("Error sending email.");
        console.log("Error sending email");
      }
    } catch (error) {
      alert("There was an error sending your message.");
      console.log("error: ", error);
    }
  }

  return (
    <div className="container">
      <header>
        {/* <h1 style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: 90, height: 50 }}
              src={armadilloLogo}
              alt="armadillo logo"
            />
            <div style={{ fontSize: "12px", fontWeight: 300, color: "black" }}>
              Armadillo Waste Inc.
            </div>
          </div>
          Armadillo Waste Inc.
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: 90, height: 50 }}
              src={armadilloLogo}
              alt="armadillo logo"
            />
            <div style={{ fontSize: "12px", fontWeight: 300, color: "black" }}>
              Armadillo Waste Inc.
            </div>
          </div>
        </h1> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: 180, height: 100 }}
            src={armadilloLogo}
            alt="armadillo logo"
          />
          <div style={{ fontSize: "24px", fontWeight: 300, color: "#B32A2A" }}>
            Armadillo Waste Inc.
          </div>
        </div>
        <div
          className="about-us"
          style={{ color: "black", marginTop: "0.5rem" }}
        >
          Dump your mess with success, with afforable and quality service
        </div>
        <img
          style={{
            width: 270,
            height: 195,
            marginTop: "1.5rem",
            marginBottom: "0rem",
          }}
          src={truck}
          alt="truck photo"
        />
      </header>

      <section style={{ transform: "translate(0rem, -1rem)" }}>
        <h2>About Us</h2>
        <p className="about-us">
          Armadillo Waste is an independent waste management company, servicing
          Houston and surrounding cities for 12 years & counting. We provide
          comprehensive solutions for full waste removal.
        </p>
        <h2>Services</h2>
        <h3 className="subheaders">Rental Services</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ul className="list-1">
            <li style={{ color: "black" }}>Waste Removal</li>
            <li style={{ color: "black" }}>Freight Hauler</li>
            <li style={{ color: "black" }}>Residential Projects</li>
            <li style={{ color: "black" }}>Commercial Projects</li>
          </ul>
        </div>
        <h3 className="subheaders">Container Sizes Available</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ul className="list-2">
            <li style={{ color: "black" }}>
              15 yard Box container {`(3ft tall x 8ft wide x 12ft long)`}
            </li>
            <li style={{ color: "black" }}>
              20 yard Box container {`(3ft tall x 8ft wide x 22ft long)`}
            </li>
            <li style={{ color: "black" }}>
              30 yard Box container {`(5ft tall x 8ft wide x 22ft long)`}
            </li>
            <li style={{ color: "black" }}>
              40 yard Box container {`(7ft tall x 8ft wide x 22ft long)`}
            </li>
          </ul>
        </div>
        <h3 className="subheaders">Acceptable Waste</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ul className="list-3">
            <li style={{ color: "black" }}>Yard waste and bagged debris</li>
            <li style={{ color: "black" }}>
              Commercial appliances such as refrigerators
            </li>
            <li style={{ color: "black" }}>
              Home furniture like sofas, mattresses, and tables
            </li>
            <li style={{ color: "black" }}>
              Office furniture removal and liquidation
            </li>
            <li style={{ color: "black" }}>
              Construction scrap, wood, and metal recycling
            </li>
            <li style={{ color: "black" }}>
              Foreclosure clean-outs and much more
            </li>
          </ul>
        </div>
        <h3 className="subheaders">Non-Acceptable Waste</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ul className="list-4">
            <li style={{ color: "black" }}>Hazard Waste</li>
            <li style={{ color: "black" }}>TV's</li>
            <li style={{ color: "black" }}>Paint</li>
            <li style={{ color: "black" }}>Tires</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 style={{ color: "#333" }}>Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label style={{ color: "black" }}>
            Name:
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              name="name"
              required
            />
          </label>
          <label style={{ color: "black" }}>
            Email:
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="email"
              required
            />
          </label>
          <label style={{ color: "black" }}>
            Message:
            <textarea
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={5}
              required
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
      <section>
        <h2>Contact Info</h2>
        <address style={{ color: "black" }}>
          <div>
            <strong>Office Location:</strong>
          </div>
          <a
            className="address-link"
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>11920 Mandy</div>
            <div>Houston, TX 77050</div>
          </a>
          <strong>Main #:</strong> 832-379-9661
          <br />
          <strong>Office #:</strong> 832-574-2689
          <br />
        </address>
      </section>
      <section>
        <h2>Hours of Operation</h2>
        <div
          style={{
            display: "flex",
            color: "black",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>
            <div>M-F</div>
            <div>6am-5pm</div>
          </span>
          <span style={{ marginLeft: 30 }}>
            <div>Sat</div>
            <div>6am-12pm</div>
          </span>
        </div>
      </section>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} Armadillo Waste Inc. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
