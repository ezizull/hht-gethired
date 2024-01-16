
import { useLocation, useNavigate } from "react-router-dom";

export function initFunc() {
  const navigate = useNavigate();
  const location = useLocation();

  return { navigate, location };
}
