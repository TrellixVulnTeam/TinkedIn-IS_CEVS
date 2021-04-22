import { User } from "./interfaces/user-i.model";

export class CandidateModel extends User {
  country: string;
  city: string;
  relocation: boolean;
  skills: Array<string>;

  constructor(
    uuid: string,
    displayName: string,
    email: string,
    country: string,
    city: string,
    relocation: boolean,
    skills: Array<string>
  ) {
    super(uuid, displayName, email);
    this.country = country;
    this.city = city;
    this.relocation = relocation;
    this.skills = skills;
  }

  getSkills(): Array<string> {
    return this.skills;
  }

  getCountry(): string {
    return this.country;
  }

  getCity(): string {
    return this.city;
  }
}
