import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom';
import {MovieState} from "../movieState";

//Animations
import {motion} from "framer-motion";
import {pageAnimation} from '../animation'

//useHistory: It give us information about where we are. it checks that the url that we are and the url of the movie
const MovieDetail = () => {
    const history = useHistory()
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState)
    //Extract the specific movie based on the url
    const [movie, setMovie] = useState(null)

    //useEffect
    //We want it to run as soon as the component mount.Click on a movie and see the detail of that specific movie
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) =>
            stateMovie.url === url);
        setMovie(currentMovie[0])
        //[0]: without this we have an array of an object not the object
    }, [movies, url]);
    //Dependencies: This one says it runs whenever movies update and url updates.Whenever url changes, history changes
    return (
        <>
            {movie && (
                //Make sure the movie is available. and only if the movie is available render the code
                <Details variants={pageAnimation} initial="hidden" animate='show' exit="exit">
                    <HeadLine>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="movie"/>
                    </HeadLine>
                    <Awards>
                        {movie.awards.map((award) =>(
                            <Award title={award.title} description={award.description} key={award.title}/>
                        ))}
                    </Awards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt=""/>
                    </ImageDisplay>
                </Details>
            )}
        </>
    );
};
//Styles
const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  //Use position relative to move children in the way we want
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 1.5rem;
  }
  .line{
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
 
  }
`;


//Award Component
const Award = ({title, description}) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"> </div>
            <p>{description}</p>
        </AwardStyle>
    )
}
export default MovieDetail;