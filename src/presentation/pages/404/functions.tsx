
import { useLocation, useNavigate } from "react-router-dom";

export function initFunc() {
  const navigation = useNavigate();
  const location = useLocation();

  return { navigation, location };
}
