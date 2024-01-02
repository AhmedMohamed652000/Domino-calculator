function Sidebar1({ history,closeSidebar }) {
    return (
      <div className="history-sidebar">
        <h3>السجل</h3>
        <button onClick={closeSidebar} className="btn btn-danger float-end">X</button>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Sidebar1;