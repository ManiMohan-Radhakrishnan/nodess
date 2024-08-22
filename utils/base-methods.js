import baseAxios from "./axios-base-utils";

// import { ParamsSerialize } from "./params-serialize";

// export const getHomePageRentalPlayers = (type) => {
//   return appAxios.get(`/rents/mcl_players`, {
//     params: {
//       nftType: type?.nftType,
//       "q[role_in]": type?.role,
//     },
//     paramsSerializer: (params) => {
//       return ParamsSerialize(params);
//     },
//   });
// };

export const getNodessList = (page = 1, limit = 10) => {
  return baseAxios.get(`/projects-v2?company_id=8&page=${page}&limit=${limit}`);
};
