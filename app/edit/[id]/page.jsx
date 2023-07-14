"use client"
import Edit from "@/components/Edit";
import { useEffect, useState } from "react";
const getTopicById = async (id) => {
    console.log(id)
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topic");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

const Page = ({ params }) => {
    const { id } = params
    const [topic, setTopic] = useState({});

    useEffect(() => {
        const fetchTopic = async () => {
            const topic = await getTopicById(id);
            setTopic(topic);
        };
        fetchTopic();
    }, [id]);
    const { title, description } = topic;
    return <Edit id={id} title={title} description={description} />;
}

export default Page;