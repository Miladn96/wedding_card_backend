interface IInvitation {
}

class Invitation implements IInvitation {

    constructor() {
    }

    toJson(): Partial<IInvitation> {
        return {
        };
    }

    static fromJson(json: Partial<IInvitation>): Invitation {
        return new Invitation(
        );
    }
}

export { Invitation, IInvitation };
