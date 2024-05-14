import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import MenuCard from "../MenuCard";

function Menu() {
  const imageUrl =
    process.env.PUBLIC_URL + "/assets/images/menu-herosection.png";

  const [category, setCategory] = useState([]);

  useEffect(() => {
    // fetch categories from the backend
    async function fetchCategory() {
      try {
        const response = await axios.get("http://localhost:8080/category");
        setCategory(response.data);
      } catch (err) {
        console.error("Error fetching categories", err);
      }
    }

    fetchCategory();
  }, []);

  return (
    <>
      <div
        className="px-4 py-5 text-center bg-image"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${imageUrl}')`,
          height: "600px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <h1 className="display-1 fw-bold" style={{ color: "white" }}>
            Menu
          </h1>
        </div>
      </div>
      <div
        className="py-5 px-3 px-md-5 menu-page"
        style={{ backgroundColor: "#D7BB9C", color: "#333333" }}
      >
        <Container>
          <Row>
            {category.map((category) => {
              const imageURL =
                category.Category_Images && category.Category_Images[0]
                  ? category.Category_Images[0].imageURL
                  : "https://picsum.photos/300/300";
              console.log(imageURL);

              return (
                <Col
                  key={category.categoryId}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  className="mb-4"
                >
                  <MenuCard category={category} imageURL={imageURL} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Menu;
