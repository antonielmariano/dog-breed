import { LoggedUserProvider } from "./loggedUser";
import { ListDogsProvider } from "./listDogs";
import { LoadingPageProvider } from "./loadingPage";

const Providers = ({children})=>{
    return(
        <LoggedUserProvider>
            <ListDogsProvider>
                <LoadingPageProvider>
                    {children}
                </LoadingPageProvider>
            </ListDogsProvider>
        </LoggedUserProvider>
    )
}

export default Providers