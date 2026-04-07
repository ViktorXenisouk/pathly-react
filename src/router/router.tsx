import { createBrowserRouter } from "react-router-dom"
import QuestionnairePage from "../pages/QuestionnairePage"
import ExplorePage from "../pages/ExplorePage"
import ResultPage from "../pages/ResultPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <QuestionnairePage />,
  },
  {
    path: "/explore",
    element: <ExplorePage />,
  },
  {
    path: "/result/:id",
    element: <ResultPage />,
  },
])