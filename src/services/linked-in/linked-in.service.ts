import { Injectable } from "@angular/core";
import { LinkedInI } from "../../model/interfaces/linked-in-i.model";
import { JobPostModel } from "../../model/job-post.card";
import { User } from "../../model/interfaces/user-i.model";
import { CandidateModel } from "../../model/candidate.model";

@Injectable({
  providedIn: "root"
})
export class LinkedInService implements LinkedInI {
  constructor() {}

  login(email: string): User {
    const newUser: User = new CandidateModel(
      "123",
      "Juan Perez",
      "test@upb.edu",
      "Bolivia",
      "La Paz",
      false,
      ["React"]
    );
    return newUser;
  }

  register(): User {
    return null;
  }

  apply(job: JobPostModel): boolean {
    return null;
  }
}
