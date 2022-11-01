import React from "react";
import Star from "./Star";

const MainImage = () => {
  const [contact, setCount] = React.useState(
    {
      id: 1,
      image: "./images/olu (5).jpeg",
      firstname: "Michael",
      lastname: "Ikedieze",
      dept: "IT Departmenrt",
      phone: "(234) 703 133 7909",
      email: "ucheikedieze@gmail.com",
      isFavorite: true,
    },
    {
      id: 2,
      image: "./images/olu (4).jpeg",
      firstname: "Michael",
      lastname: "Olusegun",
      dept: "Human Resources",
      phone: "(234) 812 302 2290",
      email: "olusemic@gmail.com",
      isFavorite: true,
    }
  );

  let starIcon = contact.isFavorite
    ? "../images/filled-star-icon.png"
    : "../images/white-star-icon.png";

  function toggleFavorite() {
    setCount((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <div className="mains">
      <img src={contact.image} width={"100%"} alt="" className="image-class" />
      <div className="contact-card">
        <Star isFilled={starIcon} onClicked={toggleFavorite} />
        <h2>
          {contact.firstname} {contact.lastname}
        </h2>
        <p> {contact.dept} </p>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>
    </div>
  );
};

export default MainImage;
