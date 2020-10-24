import React from 'react';
import {Button, Card} from 'react-bootstrap';

const News = (props) => {
//    console.log(props);
    console.log(props);
    return (
            <Card>
                <Card.Body>
    <Card.Title></Card.Title>
    <span>by, {props.article.content}</span>
                <br/>
                <br/>
                <Card.Text>
                </Card.Text>
                <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
    );
};

export default News;