import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
    RouterProvider ,
    Outlet
} from "react-router-dom";

// Pages
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import StepA from "./pages/StepA";
import StepB from "./pages/StepB";
import StepC from "./pages/StepC";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Outlet />}>
            <Route index element={<Login />} />
            <Route path='Welcome' element={<Welcome/>}/>
            <Route path="signup" element={<Signup />} />
            <Route path="step1" element={<StepA />} />
            <Route path="step2" element={<StepB />} />
            <Route path="step3" element={<StepC />} />
        </Route>
    )
);
const App = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default App;
