import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Armadillo Waste</h1>
        <div style={{ color: "black" }}>
          Junk hauler and bulk item removal in Houston, Texas
        </div>
      </header>

      <section>
        <h2>About Us</h2>
        <p style={{ color: "black" }}>
          Armadillo Waste specializes in hauling junk and removing bulk items in
          the Houston area. Whether it's yard waste, commercial appliances, home
          furniture, construction debris, or any other unwanted items, we have
          you covered.
        </p>
        <h3 style={{ color: "#333" }}>We can assist with:</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ul style={{ textAlign: "left", marginTop: 0, paddingTop: 0 }}>
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
      </section>

      <section>
        <h2 style={{ color: "#333" }}>Get in Touch</h2>
        <form
          className="contact-form"
          onSubmit={e => {
            e.preventDefault(); /* Handle the submit here */
          }}
        >
          <label style={{ color: "black" }}>
            Name:
            <input type="text" name="name" required />
          </label>
          <label style={{ color: "black" }}>
            Email:
            <input type="email" name="email" required />
          </label>
          <label style={{ color: "black" }}>
            Message:
            <textarea name="message" rows={5} required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
      <section>
        <h2>Contact Us</h2>
        <address style={{ color: "black" }}>
          <strong>Address:</strong> 5910 Navigation Blvd, Houston, TX 77011
          <br />
          <strong>Phone:</strong> +1 713-921-5000
          <br />
          <strong>ZIP Code:</strong> 77011
          <br />
          <strong>City:</strong> Houston
          <br />
          <strong>State:</strong> Texas
          <br />
        </address>
      </section>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} Armadillo Waste. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
