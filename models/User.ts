import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  },
  
);

// userSchema.pre("save", async function (next) {
//   if (this.isNew || this.isModified("password")) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// // custom method to compare and validate password for logging in
// userSchema.methods.isCorrectPassword = async function (password:any) {
//   return bcrypt.compare(password, this.password);
// };


const User = models.User || mongoose.model("User", userSchema)

export default User