import express from 'express';
import {createInvitation, findOneInvitation,findAllInvitation,updateInvitation,deleteInvitation} from '../controllers/invitation.controller'

const router = express.Router();

//? Create a new Invitation
router.post('/invitation', createInvitation);

//? Get all invitations
router.get('/invitation', findAllInvitation);

//? Get a Invitation by ID
router.get('/invitation/:username', findOneInvitation);

//? Add Guest
router.put('/add-guest/:username', updateInvitation);

export default router;
