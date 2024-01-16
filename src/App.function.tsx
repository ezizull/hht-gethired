import { DefaultProfile, ProfileData } from "./infrastructure/models/user/profile.model";
import { useEffect, useState } from "react";
import { ConstMessage } from "./utils/constants/message.consts";
import { useSelector } from "./infrastructure/reducers";
import { Response } from "./infrastructure/models/index.model";
import secureLocalStorage from "react-secure-storage";
import { Navigate, redirect } from "react-router-dom";
import { page } from "./presentation/routes/names";


export function initFunc() {
  const [user, setUser] = useState(DefaultProfile);
  const [loading, setLoading] = useState(false);

  const getLocalUser = async () => {
    try {
      setLoading(true);
      const userData = await secureLocalStorage.getItem("user");
      setUser(userData as Response<ProfileData>);
    } catch (e) {
      console.log(e, ConstMessage.local.error);
    } finally {
      setLoading(false);
    }
  };

  const auth = useSelector(({ loginData }) => loginData);
  useEffect(() => {
    getLocalUser();
    if (auth.data != null) {
      setUser(auth);
      redirect(page.home);
    }
  }, [auth,]);

  return { user, loading };
}