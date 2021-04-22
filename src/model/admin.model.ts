import { User } from "./interfaces/user-i.model";

export class AdminModel extends User {
  constructor(uuid: string, displayName: string, email: string) {
    super(uuid, displayName, email);
  }
}
