import { BaseModel } from '../base-model'
import { SiCommentRating } from './si-comment-rating.model'

export interface SiComment extends BaseModel {
    value: string
    rating: SiCommentRating
}
