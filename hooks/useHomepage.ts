import { IHomepageContent } from "@/lib/interfaces/ihomepage";
import { create } from "zustand";

interface HomepageContentState {
  homepageContent: IHomepageContent | null;
  setHomepageContent: (content: IHomepageContent) => void;
}

const useHomepageContentStore = create<HomepageContentState>((set) => ({
  homepageContent: null,
  setHomepageContent: (content) => set({ homepageContent: content }),
}));

export default useHomepageContentStore;
