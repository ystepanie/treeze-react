function MessageForm() {

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
        >
          전송
        </button>
      </div>
    </form>
  );
}

export default MessageForm;