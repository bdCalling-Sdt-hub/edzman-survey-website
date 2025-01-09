"use client";
import DonateSection from "@/components/LadingPage/DonateSection";
import PageHeader from "@/components/PageHeader/PageHeader";
import ShareLink from "@/components/shareLink/ShareLink";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function StoryPage() {
    const params = useParams();
    const storyId = params.id;
    const [story, setStory] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("/jsonData/story.json")
            .then((res) => {
                const stories = res.data;
                const foundStory = stories.find((item) => item.id === parseInt(storyId));
                if (foundStory) {
                    setStory(foundStory);
                } else {
                    setError("Story not found");
                }
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [storyId]);

    useEffect(() => {
        axios
            .get('/jsonData/story.json')
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="text-center text-lg w-full min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }
    if (error) return <div className="text-center text-red-500">Error: {error}</div>;

    return (
        <div className="px-4  md:px-8 lg:px-16">
            <PageHeader
                title="Uncover Your Why"
                subTitle="Take our free personality WHY's to uncover your 'Why' and receive personalized guidance and actionable steps to help you live a fulfilling life."
            />

            <div className="container mx-auto mt-8 flex flex-col md:flex-row items-start gap-6">
                {/* Main Story Section */}
                <div className="w-full flex-1">
                    <div className="mb-6">
                        <img
                            src={story.bannerImage}
                            alt={story.title}
                            className="w-[300px] md:w-[500px] rounded-lg object-cover"
                        />
                    </div>
                    <h1 className="text-2xl font-semibold mb-4">{story.title}</h1>
                    <p className="text-gray-600 mb-4">{story.description}</p>
                    <div className="flex items-center gap-4">
                        <img
                            src={story.author.image}
                            alt={story.author.name}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="font-medium">{story.author.name}</h3>
                            <p className="text-sm text-gray-500">{story.date}</p>
                        </div>
                    </div>
                </div>

                {/* Sidebar Section */}
                <div className="w-full md:w-1/4">
                    <h2 className="text-xl font-semibold mb-4">More Stories</h2>
                    {/* Example for dynamic rendering */}
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-start gap-4 mb-6 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
                        >
                            <img
                                src={item.bannerImage}
                                alt="story Thumbnail"
                                className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div>
                                <h3 className="text-sm font-semibold">
                                    {item.title.substring(0, 50)}...
                                </h3>
                                <p className="text-xs text-gray-500 mt-1">
                                    {item.description.substring(0, 60)}...
                                </p>
                                <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ShareLink />
            <DonateSection />
        </div>
    );
}

export default StoryPage;
