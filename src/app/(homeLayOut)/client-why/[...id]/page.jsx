"use client";

import {
  useGetAllStoryQuery,
  useSingleStoryGetQuery,
} from "@/app/provider/redux/services/storyApis";
import DonateSection from "@/components/LadingPage/DonateSection";
import PageHeader from "@/components/PageHeader/PageHeader";
import ShareLink from "@/components/shareLink/ShareLink";
import { imageUrl, stripHtmlTags } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";

function StoryPage() {
  const param = useParams();
  const router = useRouter();
  const storyId = param.id;
  const [selectedStory, setSelectedStory] = useState(null);
  const [loading, setLoading] = useState(true);

  const {
    data: apiResponse,
    isLoading: isApiLoading,
    isError: isApiError,
    error: apiError,
  } = useSingleStoryGetQuery({ id: storyId });

  const { data: storyData, isLoading: isAllStoriesLoading } =
    useGetAllStoryQuery({});

  // Update story when API response changes
  useEffect(() => {
    if (apiResponse?.success) {
      const apiStory = apiResponse.data;
      const mappedStory = {
        id: apiStory._id,
        title: apiStory.title,
        description: apiStory.description,
        bannerImage: apiStory.story_image,
        author: {
          name: apiStory?.author?.name,
          image: apiStory?.author?.profile_image,
        },
        date: new Date(apiStory.createdAt).toLocaleDateString(),
        insights: {
          theme: "Technology",
          tone: "Informative",
          lesson: "The importance of continuous learning in tech.",
        },
      };
      setSelectedStory(mappedStory);
      setLoading(false);
    }
  }, [apiResponse, storyId]);

  const handleStoryClick = (story) => {
    router.push(`/client-why/${story.id}`);
    setSelectedStory(story);
  };

  if (isApiLoading || loading || isAllStoriesLoading) {
    return (
      <div className="text-center text-lg w-full min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (isApiError) {
    return (
      <div className="text-center text-red-500">Error: {apiError?.message}</div>
    );
  }

  return (
    <div>
      <PageHeader
        title="Uncover Your Why"
        subTitle="Take our free personality WHY's to uncover your 'Why' and receive personalized guidance and actionable steps to help you live a fulfilling life."
      />

      <div className="container mx-auto mt-8 flex flex-col lg:flex-row items-start gap-6">
        {/* Main Story Section */}
        <div className="w-full sticky top-8 h-fit lg:w-3/4 px-2">
          <div className="flex mt-12 flex-col lg:flex-row items-center gap-4 mb-6">
            <img
              src={imageUrl(selectedStory?.bannerImage)}
              alt={selectedStory?.title}
              className="w-96 h-48 rounded-md object-cover"
            />
            <div>
              <h3 className="text-3xl font-semibold">{selectedStory?.title}</h3>
              <div className="flex items-center mt-4">
                <div className="flex items-center bg-[#bfe1fc] px-2 py-1 rounded-full">
                  <img
                    src={
                      imageUrl(selectedStory?.author?.image) ||
                      "https://via.placeholder.com/40"
                    }
                    alt={selectedStory?.author?.name || "Author"}
                    className="w-6 h-6 rounded-full object-cover mr-2"
                  />
                  <p className="text-xs">
                    {selectedStory?.author?.name || "Unknown Author"}
                  </p>
                </div>
                <div className="flex items-center gap-2 ml-3 text-gray-500">
                  <SlCalender />
                  <p className="text-sm">{selectedStory?.date}</p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-semibold mb-4">
            {selectedStory?.title}
          </h1>
          <div className="text-gray-600 mb-4">
            {stripHtmlTags(selectedStory?.description)
              .split("\n")
              .map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
          </div>

          {/* Story Insights Section */}
          {selectedStory?.insights && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Story Insights:</h2>
              <ul className="list-disc pl-6 text-gray-600">
                <li>
                  <strong>Theme:</strong> {selectedStory.insights.theme}
                </li>
                <li>
                  <strong>Tone:</strong> {selectedStory.insights.tone}
                </li>
                <li>
                  <strong>Lesson:</strong> {selectedStory.insights.lesson}
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Sticky Sidebar Section */}
        <div className="w-full lg:w-1/4 sticky top-8 h-fit">
          <h2 className="text-xl font-semibold mb-4">More Stories</h2>
          {storyData?.data?.result
            ?.filter((story) => story._id !== storyId)
            .map((story) => (
              <div
                key={story._id}
                onClick={() =>
                  handleStoryClick({
                    id: story._id,
                    title: story.title,
                    description: story.description,
                    bannerImage: story.story_image,
                    author: {
                      name: story?.author?.name,
                      image: story?.author?.profile_image,
                    },
                    date: new Date(story.createdAt).toLocaleDateString(),
                  })
                }
                className="flex items-start hover:bg-gray-300 gap-4 mb-6 p-4 border-b-[1px] border-b-black transition cursor-pointer"
              >
                <div className="flex gap-2">
                  <img
                    src={imageUrl(story.story_image)}
                    alt="Story Thumbnail"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">
                      {story.title.substring(0, 50)}...
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {stripHtmlTags(story.description).substring(0, 60)}...
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(story.createdAt).toLocaleDateString()}
                    </p>
                  </div>
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
