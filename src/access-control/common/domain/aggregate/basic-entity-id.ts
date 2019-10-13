import {InvalidIdException} from '../exception/invalid-id-exception';

export abstract class BasicEntityId {

    protected id: string;

    protected constructor(id: string) {
        this.setId(id);
    }

    private setId(id: string): void {

        const uuidRegex = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$');

        if (!uuidRegex.test(id)) {
            throw new InvalidIdException();
        }

        this.id = id;
    }

    public static create(id: string): BasicEntityId {

        // return new (<any> this)();
        return new (this as any)(id);
    }

    public toString(): string {

        return this.id;
    }
}
