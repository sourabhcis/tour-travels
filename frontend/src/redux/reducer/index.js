import { combineReducers } from "redux"
import auth from "./auth";
import tour from "./tour";
import tourDetail from "./tourDetail";
import tourResult from "./tourResult";
import reviews from "./reviews";

export default combineReducers({
    auth:auth,
    tour:tour,
    tourDetail:tourDetail,
    tourResult:tourResult,
    review: reviews
})