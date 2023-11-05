import express from 'express';

import {addUser, editUser, getUsers, getUser, deleteUser} from '../controller/user-controller.mjs';


const router = express.Router();

router.post('/add', addUser);
router.get('/all',getUsers);
router.get('/:id',getUser);
router.post('/:id',editUser);
router.delete('/:id',deleteUser);

export default router;