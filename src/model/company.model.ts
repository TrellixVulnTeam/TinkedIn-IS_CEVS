import { User } from "./interfaces/user-i.model";

export class CompanyModel extends User {
  private enabled: boolean;

  constructor(uuid: string, displayName: string, email: string) {
    super(uuid, displayName, email);
  }

  isEnabled(): boolean {
    return this.enabled;
  }
}
