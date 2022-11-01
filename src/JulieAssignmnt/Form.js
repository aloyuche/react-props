import React from "react";

const Form = () => {
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    comment: "",
    isFriendly: true,
  });

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <form>
      <input
        type={"text"}
        placeholder="First Name"
        name="firstname"
        onChange={handleChange}
        value={formData.firstname}
      />
      <p></p>
      <input
        type={"text"}
        placeholder="Last Name"
        name="lastname"
        onChange={handleChange}
        value={formData.lastname}
      />
      <p></p>
      <input
        type={"email"}
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <p></p>
      <textarea
        placeholder="Comment"
        name="comment"
        onChange={handleChange}
        value={formData.comment}
      />
      <p></p>
      <input
        type={"checkbox"}
        id="isFriendly"
        name="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
      />
      <label htmlFor="isFriendly">Are you friendly?</label>

      <p>
        <fieldset>
          <input
            type={"radio"}
            id="unemployed"
            name="employee"
            value={"unemployed"}
            onChange={handleChange}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />
          <input
            type={"radio"}
            id="parttime"
            name="employee"
            value={"parttime"}
            onChange={handleChange}
          />
          <label htmlFor="parttime">Part-Time</label>
          <br />
          <input
            type={"radio"}
            id="fulltime"
            name="employee"
            value={"fulltime"}
            onChange={handleChange}
          />
          <label htmlFor="fulltime">Full-Time</label>
          <br />
        </fieldset>
      </p>
    </form>
  );
};

export default Form;
