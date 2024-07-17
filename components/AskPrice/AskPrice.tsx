import { AskForm } from "./AskForm";

export const AskPrice = () => {
  return (
    <>
      <section className="ask-price">
        <div className="ask-price__banner bg-c-yellow2">
          <h4 className="font-bold text-[36px] mb-5">Tanya Harga Sekarang</h4>
          <div className="image-wrapper">
            <img src="/images/img-askprice.svg" alt="" />
          </div>
        </div>
        <div className="ask-price__form bg-c-gray2">
          <AskForm></AskForm>
        </div>
      </section>
    </>
  );
};
