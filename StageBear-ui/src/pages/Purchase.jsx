import { useLocation,Link, useNavigate  } from "react-router-dom";
import { useState } from "react";

const Purchase = ({shows}) => {
  const location = useLocation();
  const showID = location.state?.showID;
  const navigate = useNavigate();

  const show = shows.find((s) => s.ShowID === Number(showID));

  const [formData, setFormData] = useState({
    TicketsPurchased: 1,
    ClientFName: "",
    ClientLName: "",
    ClientStAddress: "",
    ClientCity: "",
    ClientRegion: "",
    ClientCountry: "",
    ClientPostCode: "",
    ClientEmail: "",
    ClientPhone: "",
    CardNum: "",
    CardExpMon: "",
    CardExpYear: "",
    CardSecCode: "",
    ShowID: Number(showID)
  });

  const [errors, setErrors] = useState({});

  
  const validate = () => {
    const required = [
      "ClientFName",
      "ClientLName",
      "ClientStAddress",
      "ClientCity",
      "ClientCountry",
      "ClientPostCode",
      "ClientEmail",
      "CardNum",
      "CardExpMon",
      "CardExpYear",
      "CardSecCode"
    ];

    const newErrors = {};

    required.forEach((field) => {
      if (formData[field] === "" || formData[field] === null) {
        newErrors[field] = true;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
    ...prev,
    [name]:
      name === "TicketsPurchased" || name === "CardSecCode"
        ? Number(value)
        : value
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    console.log(result);

    navigate("/cant-wait-to-see-you");
  };

  if (!showID) return <p>Error: No show selected.</p>;
  if (!show) return <p>Loading show data…</p>;
  
  return (
    <>
    <div className="purchase-page">
      <h1>Purchase Tickets for {show.Title}</h1>
      <h2>{new Date(show.Scheduled).toLocaleString("en-US", {
                timeZone: "Europe/London",
                weekday: "long",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })}</h2>

      <form onSubmit={handleSubmit} noValidate>

        <label>First Name *</label>
        <input name="ClientFName" onChange={handleChange} className={errors.ClientFName ? "error-input" : ""} />

        <label>Last Name *</label>
        <input name="ClientLName" onChange={handleChange} className={errors.ClientLName ? "error-input" : ""} />

        <label>Address *</label>
        <input name="ClientStAddress" onChange={handleChange} className={errors.ClientStAddress ? "error-input" : ""} />

        <label>City *</label>
        <input name="ClientCity" onChange={handleChange} className={errors.ClientCity ? "error-input" : ""} />

        <label>Region/State</label>
        <input name="ClientRegion" onChange={handleChange} />

        <label>Country *</label>
        <input name="ClientCountry" onChange={handleChange} className={errors.ClientCountry ? "error-input" : ""} />

        <label>Postcode *</label>
        <input name="ClientPostCode" onChange={handleChange} className={errors.ClientPostCode ? "error-input" : ""} />

        <label>Email *</label>
        <input type="email" name="ClientEmail" onChange={handleChange} className={errors.ClientEmail ? "error-input" : ""} />

        <label>Phone</label>
        <input name="ClientPhone" onChange={handleChange} />

        <label># of Tickets *</label>
        <input type="number" name="TicketsPurchased" min="1" onChange={handleChange} />

        <h2>Payment Info</h2>

        <label>Card Number *</label>
        <input name="CardNum" onChange={handleChange} className={errors.CardNum ? "error-input" : ""} />

        <label>Expiry Month *</label>
        <input name="CardExpMon" onChange={handleChange} className={errors.CardExpMon ? "error-input" : ""} />

        <label>Expiry Year *</label>
        <input name="CardExpYear" onChange={handleChange} className={errors.CardExpYear ? "error-input" : ""} />

        <label>Security Code *</label>
        <input name="CardSecCode" onChange={handleChange} className={errors.CardSecCode ? "error-input" : ""} />

        <button type="submit">Submit Order</button>
      </form>
    </div>

    <Link to={`/details/${show.ShowID}`}>
      <button className="back-2-details-btn">Back to Show Page</button>
    </Link>
    </>
  )
}

export default Purchase