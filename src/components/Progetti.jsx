import React from 'react';
import { Carousel, Container, Card, Button } from 'react-bootstrap';
import screenlinkedin from '../assets/img/screenlinkedin.png'
import screenbenchmark from '../assets/img/screenbenchmark.png'
import screencalcolatrice from '../assets/img/screencalcolatrice.png'
import screencapstone from '../assets/img/screencapstone.png'
import screenmedium from '../assets/img/screenmedium.png'
import screenmemorygame from '../assets/img/screenmemorygame.png'
import screennetflix from '../assets/img/screennetflix.png'
import screenspotify from '../assets/img/screenspotify.png'
import screenweather from '../assets/img/screenweather.png'
import screencomunità from '../assest/img/screencomunità.png'
import { FaGithub, FaYoutube } from "react-icons/fa";



const videos = [
  { src: screenlinkedin, description: 'Clone del sito Linkedin realizzato a fine percorso front-end con React, CSS e Javascript.', repositoryLink: 'https://github.com/Luigi-stack/LinkedIn-Build-week3', youtubeLink: 'https://youtu.be/vhyl059la8c' },
  { src: screenbenchmark, description: 'Quiz settimanale che Epicode fa svolgere ai propri corsisti creato in HTML, CSS e Javascript.', repositoryLink: 'https://github.com/AntonioCaputo29/Build_week',  youtubeLink:'https://youtu.be/yG1t7GP85ws' },
  { src: screencalcolatrice, description: 'Calcolatrice funzionante realizzata in HTML, CSS e Javascript.', repositoryLink: 'https://github.com/AntonioCaputo29/Esercizi-Epicode/tree/main/week2/Projectwork02(10.02)', youtubeLink: 'https://youtu.be/eKghGJFzdZQ' },
  { src: screencapstone, description: 'Progetto finale svolto alla fine del mio percorso in Epicode ovvero la creazione di un app di uno stabilimento balneare creata con React, CSS, Java Springboot.', repositoryLink:'https://github.com/AntonioCaputo29/Capstone_finale', youtubeLink: 'https://youtu.be/HurtqsuGEhA?feature=shared'},
  { src: screenmedium, description: 'Clone del sito Medium realizzato interamente in HTML e CSS più complesso e avanzato.', repositoryLink: 'https://github.com/AntonioCaputo29/Esercizi-Epicode/tree/main/week5/project5(3.03)', youtubeLink: 'https://youtu.be/IDq7PXlBc3E' },
  { src: screenmemorygame, description: 'Gioco del memory a tema programmazione da svolgere entro un tempo limite, creato con Javascript.', repositoryLink: 'https://github.com/AntonioCaputo29/MemoryGame', youtubeLink:'https://youtu.be/F7FCGZvr-88' },
  { src: screennetflix, description: 'Clone della piattaforma di Netflix realizzato interamente con Bootstrap.', repositoryLink: 'https://github.com/AntonioCaputo29/Esercizi-Epicode/tree/main/week6/Projectweek(10.03)' , youtubeLink: 'https://youtu.be/99uk4LHtYUc' },
  { src: screenspotify, description: 'Clone della piattaforma Spotify realizzato in HTML, CSS e Javascript più avanzato.', repositoryLink: '"https://github.com/mindthediv/Epicode-BuildWeek2' , youtubeLink: 'https://youtu.be/KgYhu0aD6qg'},
  { src: screenweather, description: 'App realizzata con React e Javascript per visionare le previsioni meteo di ogni città.', repositoryLink: 'https://github.com/AntonioCaputo29/weather-app' , youtubeLink: 'https://youtu.be/N2U6Iv48gmA'},
  { src: screencomunità, description: 'Sito web di una comunità alloggio dove si possono visionare tutte le informazioni attinenti alle attività, realizzato con React e javascript' , youtubeLink: 'https://youtu.be/x_vCP99yo0k'}
];

const VideoCarousel = () => {
  return (
    <Container>
      <h1 id="Project">Project</h1>
      <Carousel indicators={false}>
        {videos.map((video, index) => (
          <Carousel.Item key={index} className="custom-carousel-item">
            <img
              src={video.src}
              alt={`Slide ${index}`}
              className="img-fluid d-block mx-auto"
            />
            <Card.Text className="text-center text-white mt-2 mb-2">{video.description}</Card.Text>
            <div className="d-flex justify-content-center">
              <Button href={video.repositoryLink} target="_blank" rel="noopener noreferrer" variant="dark" className="me-3">
                <FaGithub />
              </Button>
              <Button href={video.youtubeLink} target="_blank" rel="noopener noreferrer" variant="dark">
                <FaYoutube />
              </Button>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default VideoCarousel;