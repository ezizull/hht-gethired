import { useEffect, useState } from "react";
import { DefaultProfile } from "./infrastructure/models/user/profile.model";
import secureLocalStorage from "react-secure-storage";


export function initFunc() {
  const [user, setUser] = useState(DefaultProfile);
  const [loading, setLoading] = useState(false);

  const getLocalUser = async () => {
    try {
      setLoading(true);
      const userJSON = await secureLocalStorage.getItem("@user");
      const userData = userJSON ? JSON.parse(`${userJSON}`) : null;
      setUser(userData);
    } catch (e) {
      console.log(e, "Error getting local user");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocalUser();
  }, []);

  return { user, loading };
}