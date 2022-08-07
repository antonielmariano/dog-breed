import { useContext } from "react"
import { LoadingPageContext } from "../../../context/loadingPage"
import DogCard from "../dogCard"
import { Container, ContentList } from "./styles"
import { Oval } from 'react-loading-icons'
import ReactPaginate from "react-paginate"
import { ListDogsContext } from "../../../context/listDogs"
import { CurrentPageNumberContext } from "../../../context/currentPageNumber"



const DogList= ({setSelectedId})=> {
    const {listDogs} = useContext(ListDogsContext)

    const {loading} = useContext(LoadingPageContext)
    
    const {currentPageNumber, setCurrentPageNumber} = useContext(CurrentPageNumberContext)

    

    const PER_PAGE = 25;
    const pageCount = Math.ceil(listDogs.list?.length / PER_PAGE);
    const offset = currentPageNumber * PER_PAGE;
    const currentPageData = listDogs.list?.slice(offset, offset + PER_PAGE).map(( dog ) => <DogCard key={dog} dogImg={dog} setSelectedId={setSelectedId}/>)

    const handlePageClick = ({ selected: selectedPage })=>{ 
        setCurrentPageNumber(selectedPage); 
    }
  
    return(
        <>
        {loading ? 
            (<Oval strokeWidth={5} />)
            :
            (
            <>
            <Container>
                {currentPageData}
            </Container>
            
            <ContentList>
                <ReactPaginate
                previousLabel={"←"}
                nextLabel={"→"}
                pageCount={pageCount}
                className={"list-navigation"}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
                />
            </ContentList>
            </>
            )
        }
        </>
    )
}

export default DogList