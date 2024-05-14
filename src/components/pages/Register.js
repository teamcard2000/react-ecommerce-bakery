import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname,
          lastname,
          username,
          email,
          password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        // store jwt token in local storage
        localStorage.setItem("accessToken", data.accessToken);
        navigate("/myaccount");
      } else {
        alert(data.msg);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center py-5 px-3 px-md-5"
        style={{ backgroundColor: "#FAD9D5", color: "#333333" }}
      >
        <Card
          className="w-100 bg-transparent"
          style={{ maxWidth: "400px", border: "none" }}
        >
          <Card.Body>
            <h1 className="text-center mb-5 pb-3 fw-bold">Register</h1>
            <Form onSubmit={handleRegister}>
              <Form.Group id="firstname" className="mb-4">
                <Form.Control
                  type="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="First Name"
                  required
                  style={{ border: "2px solid #B0B0B0" }}
                />
              </Form.Group>
              <Form.Group id="lastname" className="mb-4">
                <Form.Control
                  type="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Last Name"
                  required
                  style={{ border: "2px solid #B0B0B0" }}
                />
              </Form.Group>
              <Form.Group id="username" className="mb-4">
                <Form.Control
                  type="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  required
                  style={{ border: "2px solid #B0B0B0" }}
                />
              </Form.Group>
              <Form.Group id="email" className="mb-4">
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  style={{ border: "2px solid #B0B0B0" }}
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  style={{ border: "2px solid #B0B0B0" }}
                />
              </Form.Group>
              <Button className="w-100 mt-5 secondary-button2" type="submit">
                REGISTER
              </Button>
            </Form>
            <div className="w-100 text-center mt-5 fw-medium">
              <Link to="/login" className="login-link">
                Already have an account? Login here!
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Register;
