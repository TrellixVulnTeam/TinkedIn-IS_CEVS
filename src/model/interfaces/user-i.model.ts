import { LinkedInService } from "../../services/linked-in/linked-in.service";

export abstract class User {
  uuid?: string;
  displayName: string;
  email: string;
  lastLogin: number;

  constructor(uuid: string, displayName: string, email: string) {
    this.uuid = uuid;
    this.displayName = displayName;
    this.email = email;
    this.lastLogin = new Date().getTime();
  }

  login() {
    const linkedInService = new LinkedInService();
    linkedInService.login(this.email);
    this.saveUserInDb();
  }

  saveUserInDb() {
    localStorage.setItem("email", this.email);
    localStorage.setItem("lastLogin", String(this.lastLogin));
  }
}
