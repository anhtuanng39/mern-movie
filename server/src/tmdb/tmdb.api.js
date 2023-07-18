import axiosClient from "../axios/axios.client";
import tmdbEndpoints from "./tmdb.endpoint";

const tmdbApi = {
  mediaList: async ({ mediaType, mediaCategory, page }) =>
    await axiosClient.get(
      tmdbEndpoints.mediaList({ mediaType, mediaCategory, page })
    ),
  mediaDetail: async ({ mediaType, mediaId }) =>
    await axiosClient.get(tmdbEndpoints.mediaDetail({ mediaType, mediaId })),
  mediaGernes: async ({ mediaType }) =>
    await axiosClient.get(tmdbEndpoints.mediaGenres({ mediaType })),
  mediaCredits: async ({ mediaType, mediaId }) =>
    await axiosClient.get(tmdbEndpoints.mediaCredits({ mediaType, mediaId })),
  mediaVieos: async ({ mediaType, mediaId }) =>
    await axiosClient.get(tmdbEndpoints.mediaVideos({ mediaType, mediaId })),
  mediaRecommend: async ({ mediaType, mediaId }) =>
    await axiosClient.get(tmdbEndpoints.mediaRecommend({ mediaType, mediaId })),
  mediaImages: async ({ mediaType, mediaId }) =>
    await axiosClient.get(tmdbEndpoints.mediaImages({ mediaType, mediaId })),
  mediaSearch: async ({ mediaType, query, page }) =>
    await axiosClient.get(
      tmdbEndpoints.mediaSearch({ mediaType, query, page })
    ),
  personDetail: async ({ personId }) =>
    await axiosClient.get(tmdbEndpoints.personDetail({ personId })),
  personMedias: async ({ personId }) =>
    await axiosClient.get(tmdbEndpoints.personMedias(personId)),
};

export default tmdbApi;
