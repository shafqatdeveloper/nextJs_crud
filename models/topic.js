import mongoose from "mongoose";


const topicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

const Topic = mongoose.models.topics || mongoose.model("topics", topicSchema)
export default Topic;