import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MenuCard({ category, imageURL }) {
  return (
    <Card fluid className="text-center menuCard">
      <Link to={`/menu/${category.categoryId}`}>
        <div className="text-center img-container">
          <Card.Img
            variant="top"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/category imgs/" +
              imageURL
            }
            className="img-fluid menu-img"
            loading="lazy"
            style={{
              objectFit: "cover",
              background: "#333333",
              borderRadius: 0,
            }}
          />
        </div>
        <Card.Body>
          <Card.Title className="menu-name mb-3">{category.catName}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default MenuCard;
