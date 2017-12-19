import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class OneContact extends React.Component {
    constructor(){
        super();
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    componentDidMount(){
        debugger
    }

    handleDeleteClick(e){
        this.props.del(this)
    }

    render() {
        return(
            <div>
              <Card>
                <CardBody>
                  <CardTitle>{this.props.firstName + ' ' + this.props.lastName}</CardTitle>
                  <CardSubtitle>{this.props.phoneNumber}</CardSubtitle>
                  <CardText>{this.props.address} <br/> {this.props.email}</CardText>
                  <Button color="danger" onClick={ this.handleDeleteClick }>Delete</Button>
                </CardBody>
              </Card>
            </div>
        )
    }
}
