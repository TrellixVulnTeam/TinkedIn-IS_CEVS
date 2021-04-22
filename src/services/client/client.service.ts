import { Injectable } from "@angular/core";
import { UserModel } from "../../model/user.model";
import { RecommendationModel } from "../../model/recommendation.model";
import { JobPostModel } from "../../model/job-post.card";
import { Observable, of } from "rxjs";
import { User } from "../../model/interfaces/user-i.model";

@Injectable({
  providedIn: "root"
})
export class ClientService {
  constructor() {}

  getRecommendations(user: User): Observable<RecommendationModel> {
    return of(new RecommendationModel([]));
  }

  postLike(job: JobPostModel): boolean {
    console.log("Like saved", job);
    return true;
  }

  disLike(job: JobPostModel): boolean {
    console.log("Dislike saved", job);
    return true;
  }

  passed(job: JobPostModel): boolean {
    console.log("Passed saved", job);
    return true;
  }
}
