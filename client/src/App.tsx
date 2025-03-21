import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Programs from "@/pages/Programs";
import Team from "@/pages/Team";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Donate from "@/pages/Donate";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import Refund from "@/pages/Refund";
import Shipping from "@/pages/Shipping";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/programs" component={Programs} />
          <Route path="/team" component={Team} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/donate" component={Donate} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/refund" component={Refund} />
          <Route path="/shipping" component={Shipping} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
      <Toaster />
    </>
  );
}

export default App;
