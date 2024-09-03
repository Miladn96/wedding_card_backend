import {Request, Response} from 'express';
import {IInvitation, InvitationModel} from "../models/invitation.model";
import {UserModel} from "../models/user.model";
import {CommonResponse} from "../dto/response/common";

// Create
export const createInvitation = async (req: Request, res: Response) => {
    try {
        const {username, maxGuests} = req.body;
        const user = await UserModel.findOne({username: username});
        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }

        const newInvitation: IInvitation = new InvitationModel({
            user: user.id,
            action: false,
            maxGuests: maxGuests,
            guests: [],
        });

        await newInvitation.save();
        return res.status(201).json(
            new CommonResponse<IInvitation>(
                newInvitation,
                'Invitation created successfully.',
            ),
        );
    } catch (e: any) {
        res.status(500).json({error: e.message});
    }
};

// Find all
export const findAllInvitation = async (req: Request, res: Response) => {
    try {
        const invitation = await InvitationModel.find();
        res.status(200).json(new CommonResponse<Array<IInvitation>>(
            invitation,
            'Invitations.',
        ));
    } catch (err) {
        res.status(404).json({message: err});
    }
}

// Find One
export const findOneInvitation = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findOne({username: req.params.username});

        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }

        const invitation = await InvitationModel.findOne({user: user.id});

        if (!invitation) {
            return res.status(404).json({message: `There is no invitation with for ${user.username}!`});
        }

        res.status(200).json(new CommonResponse<IInvitation>(
            invitation,
            `Invitation for ${user.username} found.`,
        ));
    } catch (err) {
        res.status(404).json({message: err});
    }
}

// Update
export const updateInvitation = async (req: Request, res: Response) => {
    if (!req.body) {
        res.status(400).send({
            message: "Data can not be empty!"
        });
    }

    const username = req.params.username;

    const user = await UserModel.findOne({username: username});

    if (!user) {
        return res.status(404).json({message: 'User not found'});
    }

    const invitation = await InvitationModel.findOne({user: user.id});

    if (!invitation) {
        return res.status(404).json({message: `There is no invitation with for ${user.username}!`});
    }

    InvitationModel.findByIdAndUpdate(invitation.id, req.body, {useFindAndModify: false}).then(data => {
        if (!data) {
            return res.status(404).send({
                message: `User not found.`
            });
        } else {
            return res.send(new CommonResponse(
                data,
                "User updated successfully.",
            ));
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}

// Delete
export const deleteInvitation = async (req: Request, res: Response) => {
    await InvitationModel.findByIdAndDelete(req.params.id).then(data => {
        res.status(200);
    }).catch((err: any) =>
        res.status(500).send({
            message: err,
        })
    );
};
