"use client";
import Basecontent from "@/components/basecontent";
import { getData, getDataOpen } from "@/lib/services";
import { useQuery } from "@tanstack/react-query";
import ErrorNetwork from "@/components/ErrorNetwork";
import Skeleton from "@/components/Shared/Skeleton";
import { PageBanner } from "@/components/Shared/Pagebanner";

function ListPost() {
  const getQuery = async () => {
    return await getDataOpen("/posts");
  };
  const query = useQuery({
    queryKey: ["postsx"],
    queryFn: getQuery,
  });

  if (query.isLoading) {
    return (
      <div className="max-w-[900px] mx-auto">
        <Skeleton width="100%" height="300px" spaceBottom="5px" />
      </div>
    );
  }

  if (query.isError) {
    return (
      <div className="max-w-[900px] mx-auto">
        <ErrorNetwork />
      </div>
    );
  }

  const dataContents = query.data?.data;

  return (
    <div className="max-w-[900px] mx-auto">
      {dataContents.map((item: any) => {
        return (
          <div key={item.id} className="bg-gray-100 p-5 my-3">
            <h4 className="font-bold">{item.title}</h4>
            <div>{item.body}</div>
          </div>
        );
      })}
    </div>
  );
}

export default function ProductsSection() {
  return (
    <div>
      <Basecontent>
        <PageBanner
          pageBannerTitle="Cari Desain Sesuai Keinginanmu"
          imageUrl=""
        ></PageBanner>
        <ListPost />
      </Basecontent>
    </div>
  );
}
