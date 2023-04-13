import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Layout from "./Pages/Layout";
import Chart, {Loader as ChartLoader} from "./Components/Chart"
import Charts from "./Pages/Charts"
import Home from "./Pages/Home";

export var route = "/"

if (window.location.hostname === "patrikackermann.github.io") {
  route = "/alink-charts"
}

var router = createBrowserRouter(createRoutesFromElements(
  <Route path={route} element={<Layout/>}>
    <Route path="*"/>
    <Route index element={<Home/>}/>
    <Route path="charts" element={<Charts />}>
      <Route path=":id" element={<Chart />} loader={ChartLoader}/>
    </Route>
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
