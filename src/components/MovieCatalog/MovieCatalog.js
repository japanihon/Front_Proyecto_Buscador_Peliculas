import React from 'react';
import {Col, Card, Icon} from 'antd';
import {Link} from 'react-router-dom';
import {URL_POSTER} from '../../utils/contants';
import No_Img from '../../assets/img/39630.svg';

import './MovieCatalog.scss';


export default function MovieCatalog(props){
    const {movies:{results}}=props;

    return results.map((movie)=>(
        <Col key={movie.id} xs={4} className="movie-catalog">
            <MovieCard movie={movie}></MovieCard>
        </Col>
    ));
};

function MovieCard(props){
    const {movie:{id, title, poster_path}} = props;
    const {Meta} = Card;
    
    let posterPath= "";
    if(poster_path){
        posterPath= `${URL_POSTER}${poster_path}`;
    }else{
        posterPath = No_Img;
    };
    

    return (
        <Link to={`/movie/${id}`}>
            <Card
            hoverable
            style={{width:240}}
            cover={<img alt={title} src={posterPath}/>}
            actions={[<Icon type="eye" key="eye"/>]}>
                <Meta title={title}></Meta>
            </Card>
        </Link>
    );
};