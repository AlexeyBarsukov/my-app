import {Routes, Route, Link} from "react-router-dom";
import Converter from "../pages/Converter";
import AboutFreshData from "../pages/AboutFreshData";
import '../styles/App.css'

function RouterComponent() {
    return(
        <>
        <div className="header_router">
            <div className="aboutConverter"><Link className="converter_sign" to="/">Конвертер</Link></div>
            <div className="aboutFreshData"><Link className="converter_sign" to="/aboutFreshData">Курсы валют</Link></div>
        </div>
        <Routes>
            <Route path="/" element={<Converter />} />
            <Route path="/aboutFreshData" element={<AboutFreshData />} />
            <Route path="*" element={<Converter />} />
        </Routes>
        </>
    )
}

export default RouterComponent;