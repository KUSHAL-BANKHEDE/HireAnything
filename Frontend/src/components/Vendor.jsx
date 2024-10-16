import React from 'react';

const orders = [
  {
    id: '123456',
    vehicle: 'limousine',
    price: '$320.00',
    date: '20 Feb, 2020',
    time: '08:00 AM',
    imageUrl: 'https://example.com/limousine.png' // Replace with actual image URL
  },
  {
    id: '123457',
    vehicle: 'limousine',
    price: '$320.00',
    date: '20 Feb, 2020',
    time: '08:00 AM',
    imageUrl: 'https://example.com/limousine.png'
  },
  {
    id: '123458',
    vehicle: 'limousine',
    price: '$320.00',
    date: '20 Feb, 2020',
    time: '08:00 AM',
    imageUrl: 'https://example.com/limousine.png'
  }
];

const OrderCard = ({ order }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center">
        <img
          src={order.imageUrl}
          alt={order.vehicle}
          className="w-24 h-12 object-contain mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">{order.vehicle}</h2>
          <p className="text-sm text-gray-500">Order Id #{order.id}</p>
          <p className="text-xl font-bold text-blue-600">{order.price}</p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-6 8h6m-6 4h6m0 4h6"
            />
          </svg>
          <p>{order.date}</p>
        </div>
        <div className="flex items-center space-x-2 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3"
            />
          </svg>
          <p>{order.time}</p>
        </div>
      </div>
    </div>
  );
};

const Vendorcon = () => {
  return (
    <div className="container mx-auto p-6">
      {orders.map((order, index) => (
        <OrderCard key={index} order={order} />
      ))}
    </div>
  );
};

export default Vendorcon;
