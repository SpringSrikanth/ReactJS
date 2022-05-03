import { useRoutes } from "react-router-dom";
import Blogs from "./Components/Blogs";
import NoMatch from "./Components/NoMatch";
import App from "./App";
import Home from "./Components/Home";
import PublicBlogs from "./Components/PublicBlogs";
import BlogList from "./Components/BlogList";

export default function CustomRoutes() {
    return useRoutes([
      {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path:"/home", element: <Home /> },
            {
              path: "/blogs",
              element: <Blogs />,
              children: [
                { index: true, element: <PublicBlogs /> },
                { path: "/blogs/:published", element: <BlogList /> },
              ]
            },
            { path: "*", element: <NoMatch /> },
          ],
      }
    ])
}