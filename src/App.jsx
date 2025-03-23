import React, { useState } from 'react'
import './App.css'
import PaymentForm from './components/PaymentForm'
import Filter from './components/Filter'
import Report from './components/Report'

function App() {

  const [item, setItem] = useState([
			// {
			//id: "",
			//title: "",
			//amount: 0,
			//   type: "",
			//date: new Date().toISOString().split('T')[0],
			//   memo: "",
			//   rePurchase: false
			// }
  ]);

	const getPaymentFormData = (data) => {
		setItem([
			{
				id: Math.random().toString(),
				title: data.name,
				amount: data.price,
        type: data.type,
				date: new Date(data.buyDate).toISOString().split('T')[0],
        memo: data.memo,
        rePurchase: data.rePurchase
			},
      ...item
		]);
	};

  return (
    <>
			<PaymentForm getPaymentFormData={getPaymentFormData} />
      <Filter />
      <Report item={item}/>
    </>
  )
}

export default App
