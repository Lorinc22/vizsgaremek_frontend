import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import withRouter from "../components/withRouter";

import { Toaster, toast } from "react-hot-toast";
import { NavigateFunction } from "react-router-dom";

interface State {
  email: string;
  password: string;
  rePassword: string;
}

interface Props {
  navigate: NavigateFunction;
}

class Register extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      rePassword: "",
    };
  }

  handleRegister = async () => {
    const { email, password, rePassword } = this.state;

    if (!email.trim()) {
      toast.error("Az e-mail kitöltése kötelező!");
      return;
    }

    if (password.length < 8) {
      toast.error("A jelszónak 8 vagy több karakter hosszúnak kell lennie!");
      return;
    }

    if (password !== rePassword) {
      toast.error("A jelszavak nem egyeznek!");
      return;
    }

    const adat = {
      email: email,
      password: password,
      rePassword: rePassword,
    };

    let response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adat),
    });

    if (response.status === 400) {
      toast.error("A megadott email cím már használatban van!");
      return;
    }

    this.setState({
      email: "",
      password: "",
      rePassword: "",
    });

    toast.success("Sikeres regisztráció!", {
      duration: 5000,
      position: "top-center",
      style: {
        height: "130px",
        background: "#3c1945",
        color: "white",
        fontSize: "14px",
        width: "300px",
        textAlign: "center",
        borderRadius: "20px",
      },
    });

    console.log(adat);
    this.props.navigate("/login");
  };
  render() {
    return (
      <div id="input" className="container">
        <h3 className="ont-weight-bold text-center text-uppercase text-white my-4">
          Regisztráció
        </h3>
        <div className="form__group">
          <input
            type="email"
            className="form__input"
            id="email"
            placeholder="Email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.currentTarget.value })}
          />
          <label className="form__label"> Email</label>
          <input
            type="password"
            className="form__input"
            id="password"
            placeholder="Jelszó"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.currentTarget.value })}
          />
          <label className="form__label"> Jelszó</label>
          <input
            type="password"
            className="form__input"
            id="password"
            placeholder="jelszó ujra"
            value={this.state.rePassword}
            onChange={(e) =>
              this.setState({ rePassword: e.currentTarget.value })
            }
          />
          <label className="form__label"> jelszó ujra</label>
        </div>
        <div className="div-button">
          <button className="button1" onClick={this.handleRegister}>
            Regisztráció
          </button>
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                height: "120px",
                background: "#3c1945",
                color: "white",
                fontSize: "17px",
                width: "300px",
                textAlign: "center",
                borderRadius: "20px",
              },
            }}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
