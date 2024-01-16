import { DefaultProfile, ProfileState } from "./infrastructure/models/user/profile.model";
import { useEffect, useState } from "react";
import { ConstMessage } from "./utils/constants/message.consts";
import { useSelector } from "./infrastructure/reducers";
import secureLocalStorage from "react-secure-storage";



export function initFunc() {
  const [user, setUser] = useState<ProfileState>();
  const [loading, setLoading] = useState(false);

  const getLocalUser = async () => {
    try {
      setLoading(true);
      const userData = secureLocalStorage.getItem("user");
      setUser(userData as ProfileState);
    } catch (e) {
      console.log(e, ConstMessage.local.error);
    } finally {
      setLoading(false);
    }
  };

  const authData = useSelector((state) => state.loginData);

  useEffect(() => {
    getLocalUser();
    if (authData.data != null) setUser(authData);
  }, [authData]);

  return { user, loading };
}