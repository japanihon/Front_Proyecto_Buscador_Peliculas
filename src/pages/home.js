import React from 'react';
import {Row, Col, List} from 'antd';
import useFetch from './../hooks/useFetch';
import SliderMovies from '../components/SliderMovies';
import {URL_API, API} from '../utils/contants';
import MovieList from './../components/MovieList';
import Footer from './../components/Footer';

export default function Home(){
    
    const newMovies=useFetch(
      `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1 `  
    );
    console.log(newMovies);

    const popularMovies = useFetch(
      `${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1 `
    );

    const topRatedMovies = useFetch(
      `${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1 `
    );

    return(
      <>
        <SliderMovies movies={newMovies}></SliderMovies>
        <Row>
          <Col span={12}>
            <MovieList title="Peliculas Populares" movies={popularMovies}></MovieList>
          </Col>

          <Col span={12}>
            <MovieList title="Top Mejores Peliculas Puntuadas" movies={topRatedMovies}></MovieList>
          </Col>
        </Row>
        <Footer></Footer>
      </>
    );
}