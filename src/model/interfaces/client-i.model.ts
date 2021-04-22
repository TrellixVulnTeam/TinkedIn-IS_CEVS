import { RecommendationModel } from "../recommendation.model";
import { UserModel } from "../user.model";
import { JobPostModel } from "../job-post.card";
import { Observable } from "rxjs";
import { CandidateModel } from "../candidate.model";
import { User } from "./user-i.model";

export interface ClientI {
  getRecommendations(user: User): Observable<RecommendationModel>;

  postLike(job: JobPostModel): boolean;

  disLike(job: JobPostModel): boolean;

  passed(job: JobPostModel): boolean;
}
