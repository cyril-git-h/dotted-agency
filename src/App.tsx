import React, { useEffect, useState } from 'react';
import './scss-styles/styles.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Services from './components/Services';
import SingleLine from './components/SingleLine';
import Footer from './components/Footer';
import Description from './components/Description';
import About from './components/About';
import ServicesList from './components/ServicesList';
import Clients from './components/Clients';
import OtherServices from './components/OtherServices';
import Contact from './components/Contact';
import Modal from './components/Modal';
import ModalInner from './components/ModalInner';
import Subscription from './components/Subscription';
import SubscriptionInner from './components/SubscriptionInner';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Opinions from './components/Opinions';
import ScrollToTop from './components/ScrollToTop';
import {
  Route,
  withRouter,
} from 'react-router-dom';

function App() {

  useEffect(() => {
    Aos.init({
      duration: 2000,
      disable: () => window.innerWidth < 800
    })
  })

  let [modalActive, setModalActive] = useState<boolean>(false)
  let [subActive, setSubActive] = useState<boolean>(false)

  return (
    <div className="App">
        <ScrollToTop />

        <Header active={{ modalActive, subActive }} setActive={{ setModalActive, setSubActive }} />
        <Modal active={modalActive}>
          <ModalInner active={modalActive} setActive={setModalActive} />
        </Modal>
        <Subscription active={subActive} setActive={setSubActive}>
          <SubscriptionInner />
        </Subscription>

        <Route exact path='/'>
          <Intro
            title='How can we help?'
            snippetLeft='We help companies reach their the target group through innovation and creative approaches.'
            snippetRight='We grow companies through methodologies perfected over the years.'
            image='1' />
          <Description />
          <ServicesList />
          <Opinions />
        </Route>

        <Route path='/about'>
          <Intro
            title='About us'
            snippetLeft='We’re your honest business partner.'
            snippetRight='Always ready to help you make your business prolific and more efficient.'
            image='2' />
          <About />
          <Clients />
          <SingleLine />
        </Route>

        <Route path='/services'>
          <Intro
            title='We take care of every aspect of your business'
            snippetLeft='We help companies reach their the target group through innovation and creative approaches.'
            snippetRight='We grow companies through methodologies perfected over the years.'
            image='3' />
          <Services />
          <OtherServices />
          <SingleLine />
        </Route>

        <Route path='/contact'>
          <Intro
            title='Drop us a line'
            snippetLeft=''
            snippetRight=''
            image='3' />
          <Contact />
        </Route>

        <Route path='/terms'>
          <Intro
            title='Terms &amp; Conditions'
            snippetLeft=''
            snippetRight=''
            image='2' />
          <Terms />
        </Route>

        <Route path='/privacy'>
          <Intro
            title='Privacy Policy'
            snippetLeft=''
            snippetRight=''
            image='2' />
          <Privacy />
        </Route>

        <Footer />
    </div>
  );
}

export default withRouter(App);
