import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import Verified from "./pages/verified";
import Forgotpw from "./pages/Forgotpw";
import Verifyem from "./pages/Verifyem";

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/">
//             <Route path='/Welcome' element={<Welcome />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path='/verified' element={<Verified />} />
//             <Route path='/forgot' element={<Forgotpw />} />
//             <Route path='/email' element={<Verifyem />} />
//         </Route>
//     )
// );

const App = () => {
    return (
        // <RouterProvider router={router} />
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path='/welcome' element={<Welcome />} />
                <Route path="/signup" element={<Signup />} />
                <Route path='/verified' element={<Verified />} />
                <Route path='/forgot' element={<Forgotpw />} />
                <Route path='/email' element={<Verifyem />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
