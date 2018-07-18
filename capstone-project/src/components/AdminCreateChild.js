import React, { Component } from 'react'
import { Media } from 'reactstrap';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import { addChild} from '../redux/actions/child'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'



class AdminCreateChild extends Component {

  state = {
  parent_name: '',
  notes: '',
  address: '',
  child_img: '',
  birthdate: '',
  age: '',
  child_name: '',
  date: ''
}
handleSubmit = (e) => {

  this.props.addChild(this.state)
}

  render(){

    return(
      <div>
      <div style={{ fontSize:'20px', color:'#1476A8', width: '25em', marginTop: '2em',  border: 'solid #1598AF', borderWidth: 'thin', marginBottom: '2em',backgroundColor: 'rgba(0,151,201, 0.4)', marginRight: '2em'}}>
      <Form style={{padding: '1em', marginRight: '2em'}} onSubmit={this.handleSubmit}>


      <FormGroup>
        <Label for="exampleRegister">NEW CHILD</Label>
        <Input plaintext></Input>
      </FormGroup>

    <FormGroup row >
      <Label for="exampleTitle" sm={2}></Label>
      <Col sm={10}>
        <Input type="text" name="child_name" value={this.state.child_name}
        onChange={(e)=> this.setState({child_name: e.target.value})} id="exampleTitle" placeholder="Child Name" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleDate" sm={2}></Label>
      <Col sm={10}>
        <Input type="date" name="date" value={this.state.date}
        onChange={(e)=> this.setState({date: e.target.value})} id="exampleDate" placeholder="Date" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleImage" sm={2}></Label>
      <Col sm={10}>
        <Input type="text" name="img" value={this.state.child_img}
        onChange={(e)=> this.setState({child_img: e.target.value})} id="exampleImage" placeholder="Child Image" />
      </Col>
    </FormGroup>

    <FormGroup row>
        <Label for="exampleText" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="text" value={this.state.parent_name} onChange={(e)=> this.setState({parent_name: e.target.value})} id="exampleText" placeholder="Parent Name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleDate" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="birthdate" value={this.state.birthdate}
          onChange={(e)=> this.setState({birthdate: e.target.value})} id="exampleDate" placeholder="Child Birthdate" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleDate" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="address" value={this.state.address}
          onChange={(e)=> this.setState({address: e.target.value})} id="exampleDate" placeholder="Address" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleDate" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="age" value={this.state.age}
          onChange={(e)=> this.setState({age: e.target.value})} id="exampleDate" placeholder="Child Age" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleDate" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="notes" value={this.state.notes}
          onChange={(e)=> this.setState({notes: e.target.value})} id="exampleDate" placeholder="Notes" />
        </Col>
      </FormGroup>

      <Button  style={{marginLeft:'5em', marginBottom:'10px', marginRight:'430px', color:'#1476A8'}} >Submit</Button>
      </Form>
      </div>
      </div>

    )
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  addChild
}, dispatch)

export default connect(null, mapDispatchToProps)(AdminCreateChild)
