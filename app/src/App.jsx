
import './App.css';
import HEADER_SECTION from './components/Header-section.jsx';
import ABOUT_INFO_SECTION from './components/About-info-section.jsx';
import ADVANTAGES_SECTION from './components/Advantages-section.jsx';
import BLOG_SECTION from './components/Blog-section.jsx';
import CONTACTS_SECTION from './components/Contacts-section.jsx';
import FOOTER_SECTION from './components/Footer-section.jsx';
import FORM_SECTION from './components/Form-section.jsx';
import LANDING_SECTION from './components/Landing-section.jsx';
import PHOTO_REPORT_SECTION from './components/Photo-report-section.jsx';
import POPULAR_TOUR_SECTION from './components/Popular-tour-section.jsx';

function App() {
  return (
    <>
      <HEADER_SECTION></HEADER_SECTION>
      <LANDING_SECTION></LANDING_SECTION>
      <ABOUT_INFO_SECTION></ABOUT_INFO_SECTION>
      <ADVANTAGES_SECTION></ADVANTAGES_SECTION>
      <POPULAR_TOUR_SECTION></POPULAR_TOUR_SECTION>
      <BLOG_SECTION></BLOG_SECTION>
      <PHOTO_REPORT_SECTION></PHOTO_REPORT_SECTION>
      <FORM_SECTION></FORM_SECTION>
      <CONTACTS_SECTION></CONTACTS_SECTION>
      <FOOTER_SECTION></FOOTER_SECTION>
    </>
  );
}

export default App;
