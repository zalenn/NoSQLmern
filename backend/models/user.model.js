const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 1,
  },
  
    fullName: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },

    company: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },

    dob: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },

    address: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },

    about: {
      type: String,
      required: false,
      unique: false,
      trim: true,
    },
 
});

const User = mongoose.model("User", userSchema);

module.exports = User;

// https://app.json-generator.com/ofy6bTjFvqwI
// JG.repeat(11,  {
//     id: JG.objectId(),
//     email() {
//       return (
//         _.snakeCase(this.profile.name) +
//         '@' +
//         this.profile.company +
//         JG.domainZone()
//       ).toLowerCase();
//     },
//     username() {
//       return (_.words(this.profile.name)[0] + moment(this.profile.dob).format('YY')).toLowerCase();
//     },
//     profile: {
//       fullName: `${JG.firstName()} ${JG.lastName()}`,
//       company: JG.company(),
//       dob: moment(JG.date(new Date(1988, 0, 1), new Date(1995, 0, 1))).format('YYYY-MM-DD'),
//       address: `${JG.integer(1, 100)} ${JG.street()}, ${JG.city()}, ${JG.state()}`,
//       about: JG.loremIpsum({ units: 'sentences', count: 2 }),
//     },
//     posts: JG.loremIpsum({ units: 'sentences', count: 1}).repeat(Math.random() * 6),
//     roles: _.uniq(JG.repeat(1, JG.random('owner', 'admin', 'member', 'guest'))),
//   });
