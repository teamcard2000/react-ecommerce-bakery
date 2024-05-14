import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Row, Col, Button, Spinner } from "react-bootstrap";

export default function MyAccount() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("accessToken");
      console.log(token);
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const userResponse = await fetch("http://localhost:8080/auth/user", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (userResponse.ok) {
          const data = await userResponse.json();
          setUser(data);
        } else {
          navigate("/login");
        }
      } catch (err) {
        console.error(err);
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  if (!user) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <div
      className="d-flex align-items-center justify-content-center py-5 px-3 px-md-5"
      style={{ backgroundColor: "#FAD9D5", color: "#333333" }}
    >
      <Card
        className="w-100 bg-transparent my-5"
        style={{ maxWidth: "700px", border: "none" }}
      >
        <Card.Body>
          <h1 className="mb-4">
            Welcome, {user.firstname} {user.lastname}
          </h1>
          <p className="mb-4">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="mb-5">
            <strong>Username:</strong> {user.username}
          </p>
          <Button
            className="secondary-button2 w-100"
            size="lg"
            onClick={() => {
              localStorage.removeItem("accessToken");
              navigate("/login");
            }}
          >
            LOG OUT
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
