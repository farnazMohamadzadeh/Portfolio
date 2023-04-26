import { Main } from "./components/Main"
import { Resume } from "./components/Resume/Resume"


let routes = [
    { path:"/",  element:<Main />},
    { path:"/resume",  element:<Resume />},
]
export default routes