export default abstract class BaseApiResource {
    private _id?: string
    public get id() {
        return this._id
    }

    private _createdOn?: Date
    public get createdOn() {
        return this._createdOn
    }
    
    constructor(id?: string, createdAt?: Date) {
        this._id = id
        this._createdOn = createdAt
    }
}
