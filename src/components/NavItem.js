import { useContext } from "react";
import { StoreContext } from "../store";
import { Link } from "react-router-dom";
import { setPage } from "../actions";

export default function NavItem(props) {
  const { children, to, className, activeClassName, onClose } = props;
  const { state, dispatch } = useContext(StoreContext);

  const onClick = () => {
    setPage(dispatch, to);
    // onClose && onClose();
  };

  return (
    <Link to={to}>
      <div
        onClick={onClick}
        className="d-flex align-items-center header-search-item"
        // className={`
        //     ${className} 
        //     ${state.navBar.activeItem === to ? activeClassName : ""}`}
      >
        {children}
      </div>
    </Link>
  );
}
