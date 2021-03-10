import { model, Schema } from 'mongoose'

const Team = new Schema({
    projectId: { type: Schema.Types.ObjectId, ref: 'Project' },
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
})

export default model('Team', Team, 'Team')