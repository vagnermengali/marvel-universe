import { useContext } from "react";
import { Context as ContextPage } from "../../context/pageContext";
import Login from "./Login";
import Register from "./Register";
import Layout from "../../components/Layout";

const LoginAndRegister = () => {
    const { form } = useContext(ContextPage);

    return (
        <Layout>
            {!form ?
                <Login /> : <Register />}
        </Layout>
    )
}

export default LoginAndRegister;