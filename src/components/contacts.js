import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import OneContact from './oneContact'
export default class Contact extends React.Component {
    constructor(){
        super();
        this.state={
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            address: '',
            contactList: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleInput =  this.handleInput.bind(this);
        //this.handleDelete = this.handleDelete.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        if(this.state.firstName !== '' && this.state.phoneNumber !== ''){
            this.setState({
                contactList: this.state.contactList.concat(<OneContact
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    phoneNumber={this.state.phoneNumber}
                    email={this.state.email}
                    address={this.state.address}
                    />),
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                address: ''
            });
        }
    }

    handleInput(e){
        const target = e.target;
        const name = target.name;
        const value = target.value;
        //console.log(e.target.value)
        this.setState({
            [name]: value
        });
    }

    handleDelete(e){
        this
    }

    render() {
        const style = {
            width: '50%',
            margin: '2%'
        };

        const contactList = this.state.contactList.map((item, index) => (item))

        return (
            <div style={style}>
                <Form>
                    <FormGroup>
                        <Label type='text'>First Name</Label>
                        <Input placeholder="Homer" value={ this.state.firstName } onChange={ this.handleInput } name='firstName'/>
                    </FormGroup>
                        <FormGroup>
                        <Label type='text'>Last name</Label>
                        <Input placeholder="Simpson" value={ this.state.lastName } onChange={ this.handleInput } name='lastName'/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Phone Number</Label>
                        <Input type='email'placeholder="(939) 555-0113" value={ this.state.phoneNumber } onChange={ this.handleInput } name='phoneNumber'/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type='email'placeholder="homersimpson@doh.com" value={ this.state.email } onChange={ this.handleInput } name='email'/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Address</Label>
                        <Input placeholder="742 Evergreen Terrace, Springfield" value={ this.state.address} onChange={ this.handleInput } name='address'/>
                    </FormGroup>
                    <Button color="primary" onClick={ this.handleClick }>Add contact</Button>
                </Form>
                <br/>
                <br/>
                <h2>Contacts</h2>

                <OneContact firstName={'Ivan'} lastName={'Felix'} phoneNumber={'5182092039'} email={'ivaneduardo68@gmail.com'}/>
                {contactList}
            </div>
        );
  }
}
