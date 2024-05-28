export class Permission{
    constructor(
        public readonly id: string,
        public readonly key: string,
        public readonly title: string,
        
        public readonly created_at: Date,
        public readonly update_at: Date,
        public readonly deleted_at: Date | null,

    ){}
}