import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Loading from "../components/ui/loading/Loading";
import Aos from "aos";
import "aos/dist/aos.css";
import AppLayout from "../layout/AppLayout";
import NotFound from "../pages/notfound/Notfound";
import CareerDetails from "../pages/career/sections/CareerSection4";
import JobApplicationForm from "../pages/career/sections/CareerSection3";
import BlogView from "../pages/blog/sections/BlogView";
import WorkInProgress from "../components/ui/workinprogress/WorkInProgress";

const Career = lazy(() => import("../pages/career/Career"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Services = lazy(() => import("../pages/services/Services"));
const About = lazy(() => import("../pages/about/About"));
const Home = lazy(() => import("../pages/home/Home"));
const Blog = lazy(() => import("../pages/blog/Blog"));

const AppRoute = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: false,
    });
  }, []);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AppLayout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/view" element={<BlogView />} />
          <Route path="/product" element={<WorkInProgress />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career/details" element={<CareerDetails />} />
          <Route path="/career/form" element={<JobApplicationForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AppLayout>
  );
};

export default AppRoute;
