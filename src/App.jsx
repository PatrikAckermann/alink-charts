import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Layout from "./Pages/Layout";
import Chart, {Loader as ChartLoader} from "./Components/Chart"
import Charts from "./Pages/Charts"
import Home from "./Pages/Home";

export var route = "/"

if (window.location.hostname === "patrikackermann.github.io") { // This is required on pages that have a path before the react router base path. For example on GitHub pages
  route = "/alink-charts"
}

var router = createBrowserRouter(createRoutesFromElements(
  <Route path={route} element={<Layout/>}>
    <Route path="*"/>
    <Route index element={<Home/>}/>
    <Route path="charts" element={<Charts />}>
      <Route index element={<h1 style={{textAlign: "center"}}>Wähle ein Diagramm aus.</h1>}/>
      <Route path=":id" element={<Chart />} loader={ChartLoader}/>
    </Route>
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
