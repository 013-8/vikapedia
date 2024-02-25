import { BaseModel } from './base-model'

export interface RatingBaseModel extends BaseModel {
    upvotes: number
    downvotes: number
    starRating: number
    shared: number
    liked: number
}
