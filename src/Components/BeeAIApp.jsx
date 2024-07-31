const BeeAIApp = () => {
  return (
    <div className="chat-app">
      <div className="chat-list">
        <div className="chat-list-header">
          <h2>Chat List</h2>
          <i className="bx bx-edit-alt new-chat"></i>
        </div>
        <div className="chat-list-item">
          <h4>Chat: 31/07/2024</h4>
          <i className="bx bx-x circle"></i>
        </div>
        <div className="chat-list-item">
          <h4>Chat: 31/07/2024</h4>
          <i className="bx bx-x circle"></i>
        </div>
        <div className="chat-list-item">
          <h4>Chat: 31/07/2024</h4>
          <i className="bx bx-x circle"></i>
        </div>
      </div>
      <div className="chat-window">
        <div className="chat-title">
          <h3>Chat with Bee AI</h3>
          <i className="bx bx-arrow-back arrow"></i>
        </div>
        <div className="chat">
          <div className="prompt">How are You? 
            <span>16:43:49</span>
          </div>
          <div className="response">Bzzz!!! I am very bzzzy. Wot you want? Bzzzz!!!
            <span>16:43:50</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeeAIApp
