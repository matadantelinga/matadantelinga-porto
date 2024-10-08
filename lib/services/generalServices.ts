import { getData, postData } from "../services";

export async function getGeneralInfo() {
  return await getData(`/general?populate=deep`);
}

export async function askPrices() {
  return await postData(`/askprices`);
}

export async function getStaticPageData(id: number) {
  return await getData(`/statics/${id}?populate=deep`);
}
