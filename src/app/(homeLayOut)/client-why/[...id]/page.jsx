"use client";

import DonateSection from "@/components/LadingPage/DonateSection";
import PageHeader from "@/components/PageHeader/PageHeader";
import ShareLink from "@/components/shareLink/ShareLink";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";

function StoryPage() {
    const router = useRouter();
    const pathname = usePathname();
    const storyId = parseInt(pathname.split("/").pop());
    const [story, setStory] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("/jsonData/story.json")
            .then((res) => {
                const stories = res.data;
                setData(stories);

                const foundStory = stories.find((item) => item.id === storyId);
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

    const showStory = (id) => {
        router.push(`/client-why/${id}`);
    };

    if (loading) {
        return (
            <div className="text-center text-lg w-full min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }
    if (error) return <div className="text-center text-red-500">Error: {error}</div>;

    return (
        <div>
            <PageHeader
                title="Uncover Your Why"
                subTitle="Take our free personality WHY's to uncover your 'Why' and receive personalized guidance and actionable steps to help you live a fulfilling life."
            />

            <div className="container mx-auto mt-8 flex flex-col lg:flex-row items-start gap-6">
                {/* Main Story Section */}
                <div className="w-full lg:w-3/4 px-2">
                    <div className="flex mt-12 flex-col lg:flex-row items-center gap-4 mb-6">
                        <img
                            src={story?.bannerImage}
                            alt={story?.title}
                            className="w-96 h-48 rounded-md object-cover"
                        />
                        <div>
                            <h3 className="text-3xl font-semibold">{story?.title}</h3>
                            <div className="flex items-center mt-4">
                                <div className="flex items-center bg-[#bfe1fc] px-2 py-1 rounded-full">
                                    <img
                                        src={story?.author?.image || "https://via.placeholder.com/40"}
                                        alt={story?.author?.name || "Author"}
                                        className="w-6 h-6 rounded-full object-cover mr-2"
                                    />
                                    <p className="text-xs">{story?.author?.name || "Unknown Author"}</p>
                                </div>
                                <div className="flex items-center gap-2 ml-3 text-gray-500">
                                    <SlCalender />
                                    <p className="text-sm">{story?.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-2xl font-semibold mb-4">{story?.title}</h1>
                    <div className="text-gray-600 mb-4">
                        {story?.description.split("\n").map((paragraph, index) => (
                            <p key={index} className="mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Story Insights Section */}
                    {story?.insights && (
                        <div className="mt-8">
                            <h2 className="text-xl font-semibold mb-4">Story Insights:</h2>
                            <ul className="list-disc pl-6 text-gray-600">
                                <li><strong>Theme:</strong> {story.insights.theme}</li>
                                <li><strong>Tone:</strong> {story.insights.tone}</li>
                                <li><strong>Lesson:</strong> {story.insights.lesson}</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Sticky Sidebar Section */}
                <div className="w-full lg:w-1/4 sticky top-8 h-fit">
                    <h2 className="text-xl font-semibold mb-4">More Stories</h2>
                    {data
                        .filter((item) => item.id !== storyId)
                        .map((item) => (
                            <div
                                key={item.id}
                                onClick={() => showStory(item.id)}
                                className="flex items-start hover:bg-gray-300 gap-4 mb-6 p-4 border-b-[1px] border-b-black transition cursor-pointer"
                            >
                                <div>
                                    <h3 className="text-sm font-semibold">
                                        {item.title.substring(0, 50)}...
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {item.description.substring(0, 60)}...
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                                </div>
                                <img
                                    src={item.bannerImage}
                                    alt="Story Thumbnail"
                                    className="w-16 h-16 rounded-lg object-cover"
                                />
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
