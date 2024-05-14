import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  // Limit to a maximum of 6 products
  const maxDisplay = 6;
  const displayedProducts = products.slice(0, maxDisplay);

  const imageUrl =
    process.env.PUBLIC_URL + "/assets/images/home-herosection.jpg";

  return (
    <>
      <div
        className="py-5 d-flex flex-column justify-content-center text-center bg-image"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${imageUrl}')`,
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "0 15px",
        }}
      >
        <Container className="my-5 py-5">
          <Row
            className="justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <Col lg={8}>
              <h1 className="display-5 fw-bold text-white">
                Welcome to Coral Reef Bakery
              </h1>
              <h5
                className="my-4 fw-medium text-white"
                style={{ lineHeight: 1.5 }}
              >
                Discover a world where delightful baked goods meet the beauty of
                the ocean. Dive into our marine-themed bakery and explore our
                delicious collection of breads, pastries, and treats!
              </h5>
              <Button
                size="lg"
                href="/menu"
                className="px-4 gap-3 primary-button2"
              >
                ORDER NOW
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-5" style={{ backgroundColor: "#D7BB9C" }}>
        <h1 className="display-5 fw-bold" style={{ color: "#333333" }}>
          Savor the Sea of Flavors!
        </h1>
        <Container className="mt-5">
          <p
            className="lead mb-4"
            style={{ color: "#333333", fontWeight: 500, fontStyle: "italic" }}
          >
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
        </Container>
      </div>
      <div className="py-5 px-5" style={{ backgroundColor: "#FAD9D5" }}>
        <Row>
          <Col md={4} className="mb-4">
            <Card
              className="text-center bg-transparent d-flex flex-column h-100"
              style={{ border: "none" }}
            >
              <Card.Body className="d-flex flex-column">
                <h1 className="display-4 fw-bold" style={{ color: "#333333" }}>
                  Canada's Favorites
                </h1>
                <p
                  className="lead my-4"
                  style={{ color: "#333333", fontWeight: 500 }}
                >
                  Dive into the best of Coral Reef Bakery - where each treat is
                  a delicious delight!
                </p>
                <Button
                  className="secondary-button2 mt-auto py-3"
                  variant="light"
                  href="/menu"
                  size="lg"
                  style={{
                    fontWeight: "bold",
                    padding: "15px",
                    width: "100%",
                    margin: "auto",
                  }}
                >
                  EXPLORE THE MENU
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8} className="mb-4">
            <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
              {displayedProducts.map((product) => {
                const imageURL =
                  product.Product_Images && product.Product_Images[0]
                    ? product.Product_Images[0].imageURL
                    : "https://picsum.photos/300/300";
                console.log(imageURL);

                return (
                  <Card
                    key={product.productId}
                    className="text-center bg-transparent d-inline-block"
                    style={{
                      width: "300px",
                      marginRight: "20px",
                      border: "none",
                      display: "inline-block",
                      verticalAlign: "top",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/product imgs/" +
                        imageURL
                      }
                      loading="lazy"
                      style={{ borderRadius: 0 }}
                    />
                    <Card.Body>
                      <Card.Title>
                        {product.isPlaceholder
                          ? "Placeholder Product"
                          : product.name}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </Col>
        </Row>
      </div>
      <div className="py-5" style={{ backgroundColor: "#D7BB9C" }}>
        <h1 className="display-5 fw-bold" style={{ color: "#333333" }}>
          Oceanic Offers
        </h1>
        <Container fluid className="mt-5">
          <Row className="justify-content-center">
            <Col md={4} className="mb-4">
              <Card
                className="text-center bg-transparent d-flex flex-column h-100"
                style={{ border: "none" }}
              >
                <Card.Body className="d-flex flex-column">
                  <Card.Img
                    variant="top"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/specialoffer1.jpg"
                    }
                    style={{ borderRadius: 0 }}
                  />
                  <Card.Text
                    className="mt-3"
                    style={{ fontWeight: 500, fontSize: "24px" }}
                  >
                    Savor our Seafoam Scones at 30% off - this week only!
                  </Card.Text>
                  <Button className="secondary-button mt-auto py-3">
                    CATCH THE DEAL!
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card
                className="text-center bg-transparent d-flex flex-column h-100"
                style={{ border: "none" }}
              >
                <Card.Body className="d-flex flex-column">
                  <Card.Img
                    variant="top"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/specialoffer2.jpg"
                    }
                    style={{ borderRadius: 0 }}
                  />
                  <Card.Text
                    className="mt-3"
                    style={{ fontWeight: 500, fontSize: "24px" }}
                  >
                    Join our Confection Current and get a free Coral Cupcake
                    with any purchase above $50.
                  </Card.Text>
                  <Button className="secondary-button mt-auto py-3">
                    CATCH THE DEAL!
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
