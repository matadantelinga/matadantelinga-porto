"use client";
import { IStaticPageContent } from "@/lib/interfaces/igeneral";
import { getStaticPageData } from "@/lib/services/generalServices";
import { useQuery } from "@tanstack/react-query";
import { LoaderSpinner } from "../Shared/LoaderSpinner";
import { StaticContent } from "../Shared/StaticContent";

export const TncIndex = () => {
  const query = useQuery({
    queryKey: ["qTnc"],
    queryFn: () => {
      return getStaticPageData(1);
    },
  });

  if (query.isLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  const dataContent: IStaticPageContent = query?.data?.data.data;

  return (
    <>
      <StaticContent
        title={dataContent.attributes.title}
        content={dataContent.attributes.content}
      ></StaticContent>
    </>
  );
};
