const db = require('./models');
const user = require('./models/user');

//create userapp
// db.user.create({
//     firstName: 'John',
//     lastName: 'Smith',
//     age: 23
// }).then(createdUser => {
//     console.log(createdUser.get());
// })

// // read from the users table
// db.user.findOne({
//     where: { firstName: 'Tyler' }
// }).then(foundUser => {
//     console.log(foundUser.get());
// })

// // find all users
// db.user.findAll().then(allUsers => {
//     console.log(allUsers);
// })

// //update a user
// db.user.update({
//     lastName: 'Red' // change to this
// }, {
//     where: { firstName: 'Tyler' } // current
// }).then(numRowsChanged => {
//     console.log(numRowsChanged);
// })


// // delete user
// db.user.destroy({
//     where: { lastName: 'Smith' }
// }).then(numRowsDeleted => {
//     console.log(numRowsDeleted);
// })

// db.user.findOne().then((foundUser) => {
//     // console.log(foundUser);
//     foundUser.createPet({
//         name: 'Violet',
//         species: 'Pit mix'
//     })
// })

// dfinding children assosciated with given parent
// db.user.findOne().then((foudnUser) => {
//     foundUser.getPets().then((foundPets) => {
//         console.log(foundPets);
//     })
// })


// db.pet.findOne({
//     where: {
//         name: 'Violet'
//     }
// }).then((violet) => {
//     violet.getUser().then((foundUser) => {
//         console.log(foundUser);
//     })
// })

//
// db.pet.create({
//     name: 'Hercules',
//     species: 'Min pin'
// }).then((herc) => {
//     console.log(herc);
// })

// give hercules a user
// db.pet.findOne({
//     where : {
//         name: 'Hercules'
//     }
// }).then((herc) => {
//     db.user.findOne().then((foundUser) => {
//         herc.setUser(foundUser)
//     })
// })

// db.toy.create({
//     type: 'squeaky',
//     color: 'red'
// })


// db.pet.findOne({
//     where: {
//         name: 'Moose'
//     }
// }).then((moose) => {
//     db.toy.findOne({
//         where: {
//             color: 'red',
//             typer: 'squeaky'
//         }
//     }).then((foundToy) => {
//         moose.addToy(foundToy)
//     })
// })

// db.pet.findOne({
//     where: {
//         name: 'Violet'
//     }
// }).then((violet) => {
//     db.toy.findOne({
//         where: {
//             color: 'red',
//             type: 'squeaky'
//         }
//     }).then((foundToy) => {
//         violet.addToy(foundToy)
//     })
// })

// db.toy.findOne({
//     where: {
//         type: 'squeaky',
//         color: 'red'
//     }
// }).then((foundToy) => {
//     foundToy.getPets().then((pets) => {
//         console.log(pets);
//     })
// })
