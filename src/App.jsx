import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
    RouterProvider 
} from "react-router-dom";

// Pages
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Verified from "./pages/verified";
import Forgotpw from "./pages/Forgotpw";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path='/Welcome' element={<Welcome/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/verified' element={<Verified/>}/>
            <Route path='/forgot' element={<Forgotpw/>}/>
        </Route>
    )
);
const App = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default App;