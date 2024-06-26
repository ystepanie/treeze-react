import React from 'react';
import axiosInstance from "../interceptors/axiosInstance";

function MessageForm() {
  const API_URL = '/v1/login/test';
  console.log(localStorage.getItem('x-token'));
  const testGo = async (event) => {
    event.preventDefault();
      const response = await axiosInstance.get(API_URL)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error("error : " + error);
        });
  }
  return (
    <form className="card">
      <div className="d-flex align-items-center">
        <textarea
          className="form-control"
          autoFocus
        />
        <button
          type="button"
          className="btn btn-primary send-btn"
          onClick={testGo}
        >
          전송
        </button>
      </div>
    </form>
  );
}

export default MessageForm;