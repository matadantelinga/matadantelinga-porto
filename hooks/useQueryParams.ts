import { IProductQueryParams } from "@/lib/interfaces/icategory";
import { create } from "zustand";

interface IProductStore {
  queryParams: IProductQueryParams;
  setQueryParams: (params: Partial<IProductQueryParams>) => void;
}

export const useQueryParamsStore = create<IProductStore>((set) => ({
  queryParams: {
    size: 12,
    page: 1,
    room: "",
    type: "",
    style: "",
  },
  setQueryParams: (params) =>
    set((state) => {
      const newParams = {
        size: params.size ?? state.queryParams.size,
        page: params.page ?? state.queryParams.page,
        room: params.room ?? "",
        type: params.type ?? "",
        style: params.style ?? "",
      };

      // Only keep the parameter that was provided
      if (params.room !== undefined) newParams.room = params.room;
      if (params.type !== undefined) newParams.type = params.type;
      if (params.style !== undefined) newParams.style = params.style;

      return { queryParams: newParams };
    }),
}));
