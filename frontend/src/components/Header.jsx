import { useIsFetching } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export default function Header({ children }) {
  const fetching = useIsFetching();
  const navigate = useNavigate();
  return (
    <>
      <div id="main-header-loading">{fetching > 0 && <progress />}</div>
      <header id="main-header">
        <div id="header-title">
          <h1 onClick={() => navigate("/events")} className="cursor-pointer">
            React Events
          </h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
}
