import { BaseModel } from '../base-model'
import { SiComment } from './si-comment.model'
import { SiRating } from './si-rating.model'
import { SiTag } from './tag-model'

export interface Si extends BaseModel {
    value: string
    links: string[]
    references: Guid[]
    comments: SiComment
    rating: SiRating
    tags: SiTag[]
}
