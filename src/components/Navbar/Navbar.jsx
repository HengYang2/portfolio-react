import { useHistory } from "react-router-dom"

function Navbar() {

    const history = useHistory();

    return (
        <div className="Navbar">
            <button className="homePageButton" onClick={() => history.push("/")}>
                HomePage
            </button>
            <button className="portfolioPageButton" onClick={() => history.push("/portfolioPage")}>
                PortfolioPage
            </button>
        </div>
    )
}

export default Navbar