import { model, Schema } from 'mongoose'

const Project = new Schema({
    projectId: { type: Number, required: true},
    name: { type: String, required: true },
    waitUserList: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    teamList: [{ type: Schema.Types.ObjectId, ref: 'Team'}]
})

export default model('Project', Project, 'Project')