import { checkUserIsLogged } from "./checkUserIsLogged";
import { useDispatch } from "react-redux";
import { setUser } from "./state/user";

export const setLoggedUser = async () => {
  try {
    const dispatch = useDispatch();
    const userPersistenceData = await checkUserIsLogged();
    dispatch(setUser(userPersistenceData));
  } catch (error) {
    console.log("persistence service error", error);
  }
};
