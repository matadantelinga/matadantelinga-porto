import { IPagination } from "@/lib/interfaces/igeneral";
import { IProduct } from "@/lib/interfaces/iproduct";
import { create } from "zustand";

interface StoreState {
  products: IProduct[];
  paginationProps: IPagination;
  loading: boolean;
  setProducts: (products: IProduct[]) => void;
  setPaginationProps: (paginationProps: any) => void;
  setLoading: (loading: boolean) => void;
}

export const usePaginationStore = create<StoreState>((set) => ({
  products: [],
  paginationProps: {
    page: 0,
    pageSize: 0,
    pageCount: 0,
    total: 0,
  },
  loading: false,
  setProducts: (products) => set({ products }),
  setPaginationProps: (paginationProps) => set({ paginationProps }),
  setLoading: (loading) => set({ loading }),
}));
