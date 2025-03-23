import React, { useState } from 'react'
import './css/paymentForm.css'

const PaymentForm = ({ getPaymentFormData }) => {

  /* ------- States ------- */
  // Object State
  const [objectState, setObjectState] = useState({
    name: "",
    price: "",
    type: "",
    buyDate: new Date().toISOString().split('T')[0],
    memo: "",
    rePurchase: false,
  });

  // Memo checked state
  const [memoRequired, setMemoRequired] = useState(false);    // 메모 필수 여부 상태


  /* ------- Handlers ------- */
  // input 핸들러들
  const inputHandler = (field) => (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      [field]: field === "rePurchase" ? 
        (event.target.value === "true" ? true : false)
        : event.target.value
    }));
  };

  // 메모 체크박스 핸들러
  const toggleMemoInput = () => {
    setMemoRequired((prev) => !prev);       // 메모 필수 여부 토글
    setObjectState((prevState) => ({
      ...prevState,
      memo: "",                              // 체크 해제 시 메모 초기화
    }));
  };

  // 폼 제출 핸들러
  const buttonSubmitHandler = (event) => {
    event.preventDefault();

    // 메모 체크했는데 메모 입력 안 하면 경고
    if (memoRequired && !objectState.memo.trim()) {
      alert("메모를 입력하세요!");
      return;
    }

    getPaymentFormData(objectState);

    setObjectState({
      name: "",
      price: "",
      type: "",
      buyDate: new Date().toISOString().split('T')[0],
      memo: "",
      rePurchase: false,
    });

    setMemoRequired(false); // 폼 초기화 시 체크박스도 초기화
  };

  return (
    <div className='new-payment'>
      <form onSubmit={buttonSubmitHandler}>
        <div className="new-payment__productName">
          <label htmlFor="name">이름 </label>
          <input type="text" id="name" autoComplete="name"
            onChange={inputHandler("name")}
            value={objectState.name}
            placeholder="이름"
            required />
        </div>

        <div className="new-payment__productPrice">
          <label htmlFor="price">가격 </label>
          <input type="number" id="price"
            onChange={inputHandler("price")}
            value={objectState.price}
            placeholder="가격"
            required />
        </div>

        <div className="new-payment__productType">
          <label htmlFor="new-payment__type">유형 </label>
          <select id="new-payment__type"
            onChange={inputHandler("type")}
            value={objectState.type}
            required>
            <option value=''>유형</option>
            <option value='식료품'>식료품</option>
            <option value='통신비'>통신비</option>
            <option value='전기료'>전기료</option>
            <option value='가스비'>가스비</option>
            <option value='보험료'>보험료</option>
            <option value='월세'>월세</option>
            <option value='대출이자'>대출이자</option>
            <option value='기타'>기타</option>
          </select>
        </div>

        <div className="new-payment__purchaseDate">
          <label htmlFor="purchaseDate">구입 날짜 </label>
          <input type="date" id="purchaseDate"
            onChange={inputHandler("buyDate")}
            value={objectState.buyDate}
            required />
        </div>

        <div className="new-payment__memoCheckbox">
          <label htmlFor="memoCheckbox">메모 추가</label>
          <input type="checkbox" id="memoCheckbox" name="memoCheckbox"
            onChange={toggleMemoInput} checked={memoRequired} />
          <input type="text" id="memoInput" name="memo"
            style={{ display: memoRequired ? "inline-block" : "none" }}
            placeholder="메모를 입력하세요"
            onChange={inputHandler("memo")}
            value={objectState.memo}
            required={memoRequired}       // 체크되었을 때만 required 적용
          />
        </div>

        <div className="new-payment__rePurchase">
          <span className="new-payment__rePurchaseLabel">재구매 의사:</span>
          <label htmlFor="rePurchaseYes" className="radio-label">한다</label>
          <input type="radio" id="rePurchaseYes" name="repurchase"
            onChange={inputHandler("rePurchase")}
            value="true"
            required
          />
          <label htmlFor="rePurchaseNo" className="radio-label">안한다</label>
          <input type="radio" id="rePurchaseNo" name="repurchase"
            onChange={inputHandler("rePurchase")}
            value="false"
            required
          />
        </div>

        <div className="new-payment__submit">
          <button type="submit">추가</button>
        </div>

      </form>
    </div>
  );
}

export default PaymentForm;
