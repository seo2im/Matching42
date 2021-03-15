import { model, Schema } from 'mongoose'

const Team = new Schema({
    projectId: { type: Number, required: true },
    projectName: { type: String, required: true },
    users: [{ type: String, required: true }],
})

export default model('Team', Team, 'Team')