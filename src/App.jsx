import React, { useState } from 'react'
import './App.css'
import PaymentForm from './components/PaymentForm'
import Filter from './components/Filter'
import Report from './components/Report'

function App() {

  /* ------- State ------- */
  // item
  const [item, setItem] = useState([]);
  // Type for filter
  const [filteredType, setFilteredType] = useState('식료품');


  /* ------- Type Filter ------- */
  // 선택한 '유형'변경
  const typeFilterChangeHandler = (selectedType) => {
    setFilteredType(selectedType);        // filteredType state를 선택한 type으로 변경
  };

  // type 필터링
  const filteredItem = item.filter((item) => {
    return item.type === filteredType;    // filteredType와 일치하는 item만 필터링하여 filteredItem에 저장
  });

  // 필터링 된 아이템이 없을 때
  const noItem = [
    {
      id: Math.random().toString(),
      title: "조회된 값이 없습니다."
    }
  ]


  /* ------- Sort Filter ------- */
  // 선택한 '정렬'변경
  const sortFilterChangeHandler = (selectedSort) => {
    setItem((prevItems) => {
      let sortedItems = [...prevItems];

      if (selectedSort === '가격 높은 순') {
        sortedItems.sort((a, b) => b.amount - a.amount);
      } else if (selectedSort === '가격 낮은 순') {
        sortedItems.sort((a, b) => a.amount - b.amount);
      }

      return sortedItems;
    });
  };



  // item 추가
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
      <Filter
        typeSelected={filteredType}
        onChangeTypeFilter={typeFilterChangeHandler}
        onChangeSortFilter={sortFilterChangeHandler}
      />
      <Report
        item={filteredItem.length > 0 ? filteredItem : noItem}   // filteredItem이 1개라도 있다면 필터링된 아이템리스트를 전달하고, 그렇지 않으면 noItem리스트 props로 전달
      />
    </>
  )
}

export default App
