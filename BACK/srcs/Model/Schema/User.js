import { model, Schema }from 'mongoose'

const MyProject = new Schema({
    projectId : { type: Number, required: true },
    autoMatching: { type: Boolean, required: true },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team' },
    state: { type: String, required: true },
})

const User = new Schema({
    login: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    salt: { type: String, required: true },
    myProject: [MyProject],
})

export default model('User', User, 'User')