import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const eventsUrl =
  "https://6612f97253b0d5d80f66ac1d.mockapi.io/dummy-posts/blogposts";

export async function fetchData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const news = await response.json();

  return news;
}

export async function addBookmark({ id, bookmark }) {
  const response = await fetch(`${eventsUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isBookmarked: bookmark,
    }),
  });

  if (!response.ok) {
    const error = new Error(
      "An error occurred while updating the bookmark status"
    );
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}
