import { RecommendationModel } from "../recommendation.model";
import { JobPostModel } from "../job-post.card";
import { Observable } from "rxjs";
import { CandidateModel } from "../candidate.model";

export interface ClientI {
  getRecommendations(user: CandidateModel): Observable<RecommendationModel>;

  postLike(job: JobPostModel): boolean;

  disLike(job: JobPostModel): boolean;

  passed(job: JobPostModel): boolean;
}
