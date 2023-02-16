import ApiUser from "../services/apiUser";
import ApiMarvel from "../services/apiMarvel";
import { toast } from "react-toastify";
import { createContext, useContext, useEffect, useState } from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { Children, Hero, LoginResponse, RegisterResponse, UserDataLogin, UserDataRegister, UserToken } from "./interfaceContext";
import { Context as ContextPage } from "./pageContext";
import md5 from "md5";
import jwt_decode from "jwt-decode";

interface IProvider {
    loginUser: (data: UserDataLogin) => void;
    registerUser: (data: UserDataRegister) => void;
    heroes: Hero[];
    user: UserToken;
    setUser: React.Dispatch<React.SetStateAction<UserToken>>;
    navigate: NavigateFunction;
    loading: boolean;
    hash: string;
    publicKey: string;
    ts: number;
}

export const Context = createContext<IProvider>({} as IProvider);

const ProviderUser = ({ children }: Children) => {
    const { setForm, currentPage, limit } = useContext(ContextPage);
    const [heroes, setHeroes] = useState<Hero[]>([] as Hero[]);
    const [user, setUser] = useState<UserToken>({} as UserToken);
    const [loading, setLoading] = useState(true);
    const privateKey = "c099ab217ecfda77a9d5dab4f46ceb71b422d424";
    const publicKey = "8020f46449defc5832882985dfb51a32";
    const ts = new Date().getTime();
    const hash = md5(ts + privateKey + publicKey);

    const notifyLoginSuccess = (text: string, id: string) => toast.success(text, { toastId: id });
    const notifyLoginError = (text: string, id: string) => toast.error(text, { toastId: id });
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true);
        const offset = (currentPage - 1) * limit;
        ApiMarvel.get(`/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`)
            .then((res) => {
                setHeroes(res.data.data.results);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [currentPage]);

    useEffect(() => {
        const token = localStorage.getItem('marvel-tkn');
        if (token) {
            navigate("/account");
        } else {
            navigate("/");
        }
    }, []);

    const loginUser = (data: UserDataLogin) => {
        ApiUser.post<LoginResponse>("/login", data)
            .then((res) => {
                if (res.status === 201) {
                    notifyLoginSuccess("Logged in successfully", "successLogin");
                    window.localStorage.setItem(
                        "marvel-tkn",
                        (res.data.token)
                    );
                    const decoded = jwt_decode(res.data.token) as { user: UserToken };
                    setUser(decoded.user);
                    console.log(decoded.user)
                    navigate("/account")
                }
            })
            .catch((err) => {
                notifyLoginError(Array.isArray(err.response.data.message) ? err.response.data.message[0] : err.response.data.message, "errorRegister");
            });
    };

    const registerUser = (data: UserDataRegister) => {
        ApiUser.post<RegisterResponse>("/users", data)
            .then((res) => {
                if (res.status === 201) {
                    notifyLoginSuccess("User created", "successRegister")
                    setForm(false)
                }
            })
            .catch((err) => {
                notifyLoginError(Array.isArray(err.response.data.message) ? err.response.data.message[0] : err.response.data.message, "errorRegister");
            });
    };

    return (
        <Context.Provider
            value={{
                loginUser,
                registerUser,
                heroes,
                user,
                setUser,
                navigate,
                loading,
                ts,
                publicKey,
                hash
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default ProviderUser;