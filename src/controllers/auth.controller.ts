import {Request, Response} from 'express';
import {LoginRequestDTO} from "../dto/request";
import {IUser, UserModel} from "../models/user.model";
import {IInvitation, InvitationModel} from "../models/invitation.model";
import {CommonResponse} from "../dto/response/common";

export const createUser = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const user: IUser = new UserModel(req.body);

        await user.save();

        return res.status(201).json(
            new CommonResponse<IUser>(
                user,
                'Invitation created successfully.',
            ),
        );
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
}

export const login = async (req: Request, res: Response) => {
    const body = req.body;
    if (body instanceof LoginRequestDTO) {
        const {username, password} = req.body;
        const user = UserModel.find({username: username, password: password});

        //? check if user find in database or not
        if (!user) {
            return res.status(401).json({error: 'There is no user with that username!'});
        }
    } else {
        res.status(400).json({error: 'Bad Request'});
    }
}
