import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
class FormReactStrap extends React.Component{
    render(){
        return(
        <div class="wrapper">
            <Container>
                <Row>
                    <Col sm="12">
                       <Form>
                           <FormGroup>
                               <Label>Name</Label>
                               <Input type="text" id="name" />
                           </FormGroup>
                           <FormGroup>
                                <Label for="Email">Email</Label>
                                <Input type="email" id="Email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="City">City</Label>
                                <Input type="select" id="City">
                                <option value="New Delhi">New Delhi</option>
                                <option value="Mumbai">Mumbai</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="Message">Message</Label>
                                <Input type="textarea" id="Message" />
                            </FormGroup>
                            <FormGroup>
                                <Button color="success">Send Message</Button>
                            </FormGroup>
                        </Form> 
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }

} 
export default FormReactStrap;