import type { BaseModel } from '../base-model'
import type { SiCommentRating } from './si-comment-rating.model'

export interface SiComment extends BaseModel {
    value: string
    rating: SiCommentRating
}
