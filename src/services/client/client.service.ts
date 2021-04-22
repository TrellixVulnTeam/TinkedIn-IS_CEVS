import { Injectable } from "@angular/core";
import { RecommendationModel } from "../../model/recommendation.model";
import { JobPostModel } from "../../model/job-post.card";
import { Observable, of } from "rxjs";
import { CandidateModel } from "../../model/candidate.model";

@Injectable({
  providedIn: "root"
})
export class ClientService {
  constructor() {}

  getRecommendations(user: CandidateModel): Observable<RecommendationModel> {
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
