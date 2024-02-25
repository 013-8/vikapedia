import type { BaseModel } from '../base-model'
import type { Guid } from '../shared.model'
import type { SiComment } from './si-comment.model'
import type { SiRating } from './si-rating.model'
import type { SiTag } from './tag-model'

export default interface Si extends BaseModel {
    value: string
    links: string[]
    references: Guid[]
    comments: SiComment
    rating: SiRating
    tags: SiTag[]
}

export const DummySia: Si[] = [
    <Si>{
        id: '0',
        value: 'Man skal høre mye før prællen renne (0)'
    },
    <Si>{
        id: '1',
        value: 'Man skal høre mye før prællen renne (1)'
    },
    <Si>{
        id: '2',
        value: 'Man skal høre mye før prællen renne (2)'
    },
    <Si>{
        id: '3',
        value: 'Man skal høre mye før prællen renne (3)'
    },
    <Si>{
        id: '4',
        value: 'Man skal høre mye før prællen renne (4)'
    }
]
