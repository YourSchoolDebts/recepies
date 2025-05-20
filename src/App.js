import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, useLocation} from "react-router-dom";
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Home } from './pages/home';
import { Contact } from './pages/contact';
import { About } from './pages/about';
import { Category } from "./pages/category";
import { Recipe } from "./pages/recipe";
// import { NoMatch } from "./pages/nomatch"

function Status({ code, children }) {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) staticContext.status = code;
        return children;
      }}
    />
  );
}

function NoMatch() {
  return (
    <Status code={404}>
      <div>
        <h1>Sorry, can’t find that.</h1>
      </div>
    </Status>
  );
}


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="container content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="contact/" element={<Contact />} />
              <Route path="about/" element={<About />} />
              <Route path="category/:name" element={<Category />} />
              <Route path="meal/:id" element={<Recipe />} />
              <Route component={<NoMatch />} />
            </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
