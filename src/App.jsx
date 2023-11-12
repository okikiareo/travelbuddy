import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
    RouterProvider 
} from "react-router-dom";

// Pages
import Login from "./pages/Login";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="/login" element={<Login />} />
        </Route>
    )
);
const App = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default App;