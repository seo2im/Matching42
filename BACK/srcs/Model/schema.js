import { model, Schema }from 'mongoose'

const MyProject = new Schema({
    autoMatching: { type: Boolean, required: true },
    teamId: { type: Schema.Types.ObjectId },
    state: { type: String, required: true },
})

const User = new Schema({
    login: { type: String, required: true, unique: true},
    password: { type: String, required: true },
})

export default model('User', User, 'User')