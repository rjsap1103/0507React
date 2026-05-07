const ProductCard = ({ name, price }) => {
  return (
    <>
      <DiscountBage />
      <h3>{name}</h3>
      <p>{price}원</p>
    </>
  );
};

export default ProductCard;

export const DiscountBage = () => {
  return (
    <>
      <h3>!!오늘만 특가!!</h3>
    </>
  );
};
