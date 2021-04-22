import { User } from "./user-i.model";

export interface LinkedInI {
  login(email: string): User;

  register(): User;
}
