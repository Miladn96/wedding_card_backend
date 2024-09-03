import {Document, model, Schema, Types} from 'mongoose';

interface IGuest {
    name: string;
    attending: boolean;
}

const guestSchema: Schema<IGuest> = new Schema({
    name: {type: String, required: true},
    attending: {type: Boolean, default: false},
});

const GuestModel = model<IGuest>('Guest', guestSchema);

interface IInvitation extends Document {
    user: Types.ObjectId;
    action: boolean;
    maxGuests: number;
    guests: IGuest[];
}

const invitationSchema: Schema<IInvitation> = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    action: {type: Boolean, required: true},
    maxGuests: {type: Number, required: true},
    guests: [guestSchema],
});

const InvitationModel = model<IInvitation>('Invitation', invitationSchema);

export {InvitationModel, IInvitation, GuestModel, IGuest,};
