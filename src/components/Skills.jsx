import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import epicode1 from '../assets/img/epicode 1.jpeg';
import epicode3 from '../assets/img/epicode 3.jpg';

const MainContent = () => {
  return (
    <Container>
       <div id="content">
        <h4>
          Durante i sei intensi mesi di bootcamp con Epicode, ho attraversato un viaggio straordinario, fatto di sfide, crescita personale e apprendimento continuo. Quest'esperienza è stata una vera e propria montagna russa di emozioni, con gioie e dolori che hanno contribuito a formare il mio percorso.

I momenti di gioia sono stati innumerevoli: l'entusiasmo nel risolvere un problema complesso, il senso di realizzazione quando un progetto veniva completato con successo e la condivisione di successi con compagni di corso che sono diventati veri amici. Questi momenti di felicità hanno alimentato la mia passione per la programmazione e mi hanno spinto a dare sempre il massimo.

D'altra parte, non posso negare l'inevitabile dolore che fa parte di qualsiasi viaggio di apprendimento. Le notti insonni risolvendo bug, le sfide concettuali che sembravano insormontabili e i momenti di frustrazione sono stati parte integrante dell'esperienza. Tuttavia, è proprio grazie a queste difficoltà che ho imparato di più su me stesso e sul mondo della programmazione.

In definitiva, il bootcamp con Epicode è stato un percorso di crescita straordinario. Ho guadagnato competenze tecniche di valore, ho superato ostacoli che inizialmente sembravano insormontabili e ho scoperto una passione più profonda per la programmazione. Le gioie e i dolori che ho vissuto durante questa esperienza hanno reso il mio viaggio unico e memorabile, e sono pronto ad affrontare qualsiasi sfida futura con fiducia e determinazione.
        </h4>
      </div>
      <Row className="card-container">
        <Col sm={12} md={6} lg={4}>
          <Card className="bg-transparent text-white">
            <div className="image-container">
              <Card.Img src={epicode1} alt="Stony Beach" className="card-img" />
            </div>
            <div className="card-text">
              <h5>Professionisti</h5>
                <br />
              <p>Tutto il team di Epicode supporta e soprattutto "sopporta".</p>
              <br />
              <p>EPICI</p>
            </div>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="bg-transparent text-white">
            <div className="image-container">
              <Card.Img src={epicode3} alt="Stony Beach" className="card-img" />
            </div>
            <div className="card-text">
              <h5>Famiglia</h5>
              <p>Ebbene si, durante il mio percorso ho trovato delle persone speciali che per sei mesi sono state parte fondamentale della mia avventura e che ora, saranno parte fondamentale della mia vita.</p>
              <p>AMICI</p>
            </div>
          </Card>
        </Col>
      </Row>
      <div className="d-flex justify-content-center mt-4">
        <Button variant="dark" className="mr-2 w-100">
          <a href="https://epicode.com/it/?utm_source=adwords&utm_campaign=Brand&utm_adgroup=brandexact&utm_term=epicode&utm_medium=ppc&hsa_acc=1246633295&hsa_cam=11897141170&hsa_grp=115607542236&hsa_ad=639941169967&hsa_src=g&hsa_tgt=kwd-1083842420863&hsa_kw=epicode&hsa_mt=e&hsa_net=adwords&hsa_ver=3" className="text-white text-decoration-none tasto">
           Clicca qui per conoscere EPICODE
          </a>
        </Button>
        <Button variant="dark" className="mr-2 w-100">
          <a href="https://epicode.com/it/corso-web-developer/" className="text-white text-decoration-none tasto">
            Clicca qui per conoscere il corso svolto
          </a>
        </Button>
      </div>

    </Container>
  );
};

export default MainContent;
