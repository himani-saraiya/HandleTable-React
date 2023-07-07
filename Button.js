import React, { useState } from 'react';

const Todo = () => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [remark, setRemark] = useState("");
  const [transactions, setTransactions] = useState([]);

  const add = () => {
    if (amount !== "" && type !== "" && remark !== "") {
      setTransactions([...transactions, { amount, type, remark }]);
      setType("");
      setAmount("");
      setRemark("");
    }
  };

  return (
    <>
      <input
        type='number'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Choose type</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        type='text'
        value={remark}
        onChange={(e) => setRemark(e.target.value)}
      />
      <button onClick={add}>Save</button>

      <table width="100%" border={1}>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Type</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, ind) => {
            return (
              <tr key={ind}>
                <td>{txn.amount}</td>
                <td>{txn.type}</td>
                <td>{txn.remark}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Todo;
