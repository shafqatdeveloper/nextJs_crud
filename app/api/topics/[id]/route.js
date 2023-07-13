import connectToDb from "@/Libs/Database";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();
    await connectToDb();
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Topic Updated successfully" }, { status: 200 })
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectToDb();
    const topic = await Topic.findById({ _id: id });
    return NextResponse.json(topic);
}