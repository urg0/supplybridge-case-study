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

export async function createPost(postData) {
  const response = await fetch(eventsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    const error = new Error("An error occurred while creating the post");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}

export async function updatePost({ id, postData }) {
  const response = await fetch(`${eventsUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    const error = new Error("An error occurred while updating the post");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}

export async function deletePost({ id }) {
  const response = await fetch(`${eventsUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = new Error("An error occurred while deleting the post.");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}
