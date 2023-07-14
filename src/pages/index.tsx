import Head from "next/head";
import { useCallback } from "react";

import { StoriesList, StoryContainer } from "~/features/feed";
import { TopNav, Footer } from "~/layout";

import { api } from "~/utils/api";
import { withStaticAPIHelpers } from "~/utils/api/ssg";

const TOP_STORIES_INPUT = {
  from: 0,
  amount: 25,
};

const NEW_STORIES_INPUT = {
  from: 0,
  amount: 3,
};

export const getStaticProps = withStaticAPIHelpers(async ({ trpc }) => {
  await Promise.all([
    trpc.home.topStories.prefetch(TOP_STORIES_INPUT),
    trpc.home.newStories.prefetch(NEW_STORIES_INPUT),
  ]);

  return {
    props: {}, // trpc state is serialized automatically by the wrapper
    revalidate: 60,
  };
});

export default function Home() {
  const { data: topStories, refetch: refetchTopStories } =
    api.home.topStories.useQuery(TOP_STORIES_INPUT);
  const { data: newStories, refetch: refetchNewStories } =
    api.home.newStories.useQuery(NEW_STORIES_INPUT);

  const handleTopStoryUpvote = useCallback(
    (_href: string) => void refetchTopStories(),
    [refetchTopStories]
  );

  const handleNewStoryUpvote = useCallback(
    (_href: string) => {
      void refetchTopStories();
      void refetchNewStories();
    },
    [refetchNewStories, refetchTopStories]
  );

  return (
    <>
      <TopNav />
      <Head>
        <title>Kiwi News</title>
      </Head>
      <div className="mx-auto max-w-7xl pr-4 pt-4 pb-4 bg-[#f6f6ef]">
        <StoriesList ordered>
          {topStories?.slice(0, 3).map((story) => (
            <StoryContainer
              {...story}
              key={story.signature}
              onUpvoteSubmitted={handleTopStoryUpvote}
            />
          ))}
        </StoriesList>
        <StoriesList ordered start={4}>
          {topStories?.slice(3).map((story) => (
            <StoryContainer
              {...story}
              key={story.signature}
              onUpvoteSubmitted={handleTopStoryUpvote}
            />
          ))}
        </StoriesList>
       
      </div>
      <Footer/>
    </>
  );
}
