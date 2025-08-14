"use client";
import { IProjectItem } from "@/lib/interfaces/iproject";
import { useRouter } from "next/navigation";
import React from "react";

interface IPorjectCardProps {
  project: IProjectItem;
}

export const ProjectCard: React.FC<IPorjectCardProps> = ({ project }) => {
  const router = useRouter();

  const seeProjectDetail = (slug: string) => {
    router.push(`/portofolio/${slug.replace("/", "")}`);
  };
  return (
    <>
      <div className="item" onClick={() => seeProjectDetail(project.slug)}>
        <div className="item__image">
          <img src={project.images[0].url} alt={project.name}></img>
        </div>
        <div className="item__detail py-2">
          <h2 className="title">{project.name}</h2>
          <div className="item-cat">{project.category.name}</div>
        </div>
      </div>
    </>
  );
};
