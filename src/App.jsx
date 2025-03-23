import React, { useState } from 'react'
import './App.css'
import PaymentForm from './components/PaymentForm'
import Filter from './components/Filter'
import Report from './components/Report'

function App() {

  /* ------- State ------- */
  const [item, setItem] = useState([]);
  const [filteredType, setFilteredType] = useState('식료품');

  const filterChangeHandler = (selectedType) => {
    setFilteredType(selectedType);
  };

  const filteredItem = item.filter((item) => {
    return item.type === filteredType;
  });

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
  
  const noItem = [
    {
			id: Math.random().toString(),
      title: "조회된 값이 없습니다."
    }]

  return (
    <>
			<PaymentForm getPaymentFormData={getPaymentFormData} />
      <Filter typeSelected={filteredType} onChangeFilter={filterChangeHandler} />
      <Report 
        item={filteredItem.length > 0 ? filteredItem : noItem} 
      />
    </>
  )
}

export default App
