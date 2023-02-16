import { Children } from "./interfaceContext";
import ProviderPage from "./pageContext";
import ProviderUser from "./userContext";

const ProvidersAll = ({ children }: Children) => {
    return (
        <ProviderPage>
            <ProviderUser>
                {children}
            </ProviderUser>
        </ProviderPage>
    )
};

export default ProvidersAll;