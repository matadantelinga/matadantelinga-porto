import { getData } from "../services";

export const getProjectsByUser = async (id: string) => {
  return await getData(`/projects?filters[user][id][$eq]=${id}&populate=deep`);
};
