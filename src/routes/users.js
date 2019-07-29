import express from 'express';
import usersController from '../controllers/usersController';
const router = express.Router();

// home route
router.get('/', usersController.get);

// get all available employees route
router.get('/getAllusers', usersController.getAll);

// create a new employee route
router.post('/createUser', usersController.createUser)

// catch all route, covers for invalid routes
router.all('*', usersController.catchAll);

export default router;
