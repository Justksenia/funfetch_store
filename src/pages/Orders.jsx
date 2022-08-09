import Card from "../Components/Card/Card";

const Orders = ({ orders }) => {
  const copyOrders = JSON.parse(JSON.stringify(orders));
  return (
    <div>
      <h2>Мои покупки</h2>
      <div>
        {copyOrders.map((item, index) => (
          <div className="order__block" key={index}>
            <p>Заказ № {index + 1}</p>
            <div className="list__item">
              {delete item.id}{" "}
              {Object.values(item).map((item, index) => (
                <Card {...item} key={item.id + index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
