import { IProjectItem } from "../interfaces/iproject";
import { Projects } from "../staticDataObjects/projects";

export async function fetchProjectBySlug(
  slug: string
): Promise<IProjectItem | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Projects.find((project) => project.slug === slug));
    }, 200);
  });
}
