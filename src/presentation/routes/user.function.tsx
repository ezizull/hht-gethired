import { DefaultProfile } from "@/infrastructure/models/user/profile.model";
import { useSelector } from "@/infrastructure/reducers";
import { useEffect, useState } from "react";

export function initFunc() {
  const [user, setUser] = useState(DefaultProfile);
  const auth = useSelector(({ loginData }) => loginData);

  useEffect(() => {
    if (auth.data) setUser(auth);
  }, [auth]);

  return { user, auth };
}