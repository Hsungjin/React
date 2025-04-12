import './index.css';

function SideBarFooter({ onClick }) {
  return (
    <div className="SideBarFooter">
      <button className="SideBarFotter_add-button" onClick={onClick}>
        +
      </button>
    </div>
  );
}

export default SideBarFooter;
