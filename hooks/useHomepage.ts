import { HomepageContent } from "@/lib/interfaces/ihomepage";
import { create } from "zustand";

interface HomepageContentState {
  homepageContent: HomepageContent | null;
  setHomepageContent: (content: HomepageContent) => void;
}

const useHomepageContentStore = create<HomepageContentState>((set) => ({
  homepageContent: null,
  setHomepageContent: (content) => set({ homepageContent: content }),
}));

export default useHomepageContentStore;
