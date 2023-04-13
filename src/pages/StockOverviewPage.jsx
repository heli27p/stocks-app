import AutoComplete from "../components/AutoComplete"
import StockList from "../components/StockList"
import trading from "../images/trading.png"

const StockOverviewPage = () => {
    return(
        <div>
        <div className="text-center">
          <img src={trading} />
        </div>
          <AutoComplete/>
          <StockList/>
        </div>
    )
}

export default StockOverviewPage