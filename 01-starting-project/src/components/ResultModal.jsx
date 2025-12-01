
export default function ResultModal({ result, onClose }) {
 
  if (!result) return null;

  return (
    <div
      className="result-modal"
      style={{
        position: "fixed",      
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "hsla(0, 0%, 0%, 0.91)", 
        zIndex: 1000,           
      }}
    >
      <div style={{ background: "white", padding: "20px", borderRadius: "8px" }}>
        <h2>{result.title}</h2>
        <p>{result.message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}








