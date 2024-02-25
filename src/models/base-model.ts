import { Guid } from './shared.model'

export abstract class BaseModel {
    id: Guid
    created: Date
    updated: Date
}
