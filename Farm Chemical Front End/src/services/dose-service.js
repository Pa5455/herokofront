import axios from "axios";
import {user} from "../stores";

export class DoseService {
   //baseUrl = "";

  constructor(baseUrl) {
    console.log("HELLO");
    this.baseUrl = "http://Patricks-MacBook-Pro.local:4000";
    console.log(this.baseUrl);
    const doseCredentials = localStorage.dose;
    if (doseCredentials) {
      const savedUser = JSON.parse(doseCredentials);
      user.set({
        email: savedUser.email,
        token: savedUser.token,
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
    }
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email: email,
          token: response.data.token,
        });
        localStorage.dose = JSON.stringify({email: email, token: response.data.token});
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async logout() {
    user.set({
      email: "",
      token: "",
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("dose");
  }

  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  }

  async dose(dose) {
    try {
      const response = await axios.post(this.baseUrl + "/api/products/" + dose.product + "/dosage", dose);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  }

  async getProducts() {
    try {
      const response = await axios.get(this.baseUrl + "/api/products");
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getDosage() {
    try {
      const response = await axios.get(this.baseUrl + "/api/dosage");
      return response.data;
    } catch (error) {
      return [];
    }
  }
}
