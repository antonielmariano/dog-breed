import { LoggedUserProvider } from "./loggedUser";
import { ListDogsProvider } from "./listDogs";
import { LoadingPageProvider } from "./loadingPage";
import { CurrentPageNumberProvider } from "./currentPageNumber";
import { DogsPerListProvider } from "./dogsPerList";

const Providers = ({children})=>{
    return(
        <LoggedUserProvider>
            <ListDogsProvider>
                <LoadingPageProvider>
                    <CurrentPageNumberProvider>
                        <DogsPerListProvider>
                            {children} 
                        </DogsPerListProvider>
                    </CurrentPageNumberProvider>
                </LoadingPageProvider>
            </ListDogsProvider>
        </LoggedUserProvider>
    )
}

export default Providers