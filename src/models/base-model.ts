import type { Guid } from './shared.model'

export interface BaseModel {
    id: Guid
    created: Date
    updated: Date
}
