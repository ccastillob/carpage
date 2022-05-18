import 'react-lazy-load-image-component/src/effects/blur.css';

import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import EventSectionBannerLeft from 'components/molecules/EventSectionBannerLeft';
import EventSectionBannerRight from 'components/molecules/EventSectionBannerRight';

const EventPage = () => {
  return (
    <>
      <HeaderMenu status="event" />
      <main className="main-container eventpage">
        <EventSectionBannerLeft
          pathImage="imageAudiRacing.jpg"
          title="Audi Racing"
          description="Un evento que te dejará"
          shadedText="sin aliento"
          eventLocation="Venecia - Italia"
        />

        <EventSectionBannerRight
          pathImage="imageAudiEvolution.jpg"
          title="Audi Evolution"
          description="Una nueva"
          shadedText="generación"
          continueText="está por comenzar"
          eventLocation="Edimburgo - Escocia"
        />

        <EventSectionBannerLeft
          pathImage="imageAudiAdvanced.jpg"
          title="Audi Advanced"
          description="Más potencia, tecnología y"
          shadedText="rendimiento"
          eventLocation="Kiev - Ucrania"
        />

        <EventSectionBannerRight
          pathImage="imageAudiNight.jpg"
          title="Audi Night"
          description="Atrevete a conocer el"
          shadedText="sinónimo"
          continueText="de elegancia"
          eventLocation="Paris - Francia"
        />
      </main>
      <FooterMenu status="event" />
    </>
  );
};

export default EventPage;
