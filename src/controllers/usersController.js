import { db } from "../config";

const usersController = {
  get(req, res) {
    return res.status(200).json({ message: 'Welcome to Employee Database' })
  },

  // controller to return all users
  getAll(req, res) {
    const usersCollection = db.collection('users');

    usersCollection.find().toArray((err, results) => {
      return res.status(200).json(results);
    });
  },

  // controller to create a user
  createUser(req, res) {
    const usersCollection = db.collection('users');

    usersCollection.insertOne(req.body, (err, results) => {
      if (err) return console.log('err', err);

      return res.status(201).json({
        message: 'user created',
        user: results.ops
      });
    })
  },

  // controller to handle all other routes
  catchAll(req, res) {
    return res.status(404).send({
      message: 'Oops! 404. Page not Found',
    })
  }
}

export default usersController;
