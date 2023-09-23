import FeedbackList from "./components/FeedbackList";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackStat from "./components/FeedbackStat";
import FeedbackForms from "./components/FeedbackForms";
import AboutPage from "./components/About/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";
function App() {
  return (
    <FeedbackProvider>
      <Header text="Feedback-App" />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackStat />
                <FeedbackForms />
                <FeedbackList />
              </>
            }
          />

          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </FeedbackProvider>
  );
}

export default App;
