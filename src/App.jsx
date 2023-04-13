import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Layout from "./Pages/Layout";
import Chart, {Loader as ChartLoader} from "./Components/Chart"
import Charts from "./Pages/Charts"
import Home from "./Pages/Home";
import TypeSelect from "./Pages/TypeSelect"

export var route = "/"

if (window.location.hostname === "patrikackermann.github.io") { // This is required on pages that have a path before the react router base path. For example on GitHub pages
  route = "/alink-charts"
}

var router = createBrowserRouter(createRoutesFromElements(
  <Route path={route} element={<Layout/>}>
    <Route path="*"/>
    <Route index element={<Home/>}/>
    <Route path="charts" element={<TypeSelect/>}>
      <Route path=":type" element={<Charts/>}>
        <Route path=":id" element={<Chart />} loader={ChartLoader}/>
        <Route index element={<h1 style={{textAlign: "center"}}>Wähle ein Diagramm aus.</h1>}/>
      </Route>
      <Route index element={<h1 style={{textAlign: "center"}}>Wähle ein Diagrammtyp aus.</h1>}/>
    </Route>
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
