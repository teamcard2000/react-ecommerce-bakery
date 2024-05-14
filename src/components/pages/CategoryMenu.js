import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../ProductCard";

function CategoryMenu() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryDetails, setCategoryDetails] = useState({
    name: "",
    Category_Images: [],
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/category/${categoryId}`)
      .then((response) => {
        setCategoryDetails({
          name: response.data.catName,
          Category_Images: response.data.Category_Images || [],
        });
      })
      .catch((error) =>
        console.error("Error fetching category details", error)
      );

    axios
      .get(`http://localhost:8080/category/${categoryId}/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products", error));
  }, [categoryId]);

  const imageUrl =
    categoryDetails.Category_Images.length > 0
      ? `${process.env.PUBLIC_URL}/assets/images/category imgs/${categoryDetails.Category_Images[0].imageURL}`
      : "";

  console.log(imageUrl);
  console.log(categoryId);

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
            {categoryDetails.name}
          </h1>
        </div>
      </div>
      <div
        className="py-5 px-3 px-md-5 menu-page"
        style={{ backgroundColor: "#D7BB9C", color: "#333333" }}
      >
        <Container>
          {products.length > 0 ? (
            <div>
              <Row>
                {products.map((product) => {
                  const productIMG =
                    product.Product_Images && product.Product_Images[0]
                      ? product.Product_Images[0].imageURL
                      : "https://picsum.photos/300/300";
                  console.log(productIMG);

                  return (
                    <Col
                      key={product.productId}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={4}
                      className="mb-4"
                    >
                      <ProductCard categoryId={categoryId} product={product} imageURL={productIMG} />
                    </Col>
                  );
                })}
              </Row>
            </div>
          ) : (
            <p className="my-5 display-5 fw-bold">No products found</p>
          )}
        </Container>
      </div>
    </>
  );
}

export default CategoryMenu;
