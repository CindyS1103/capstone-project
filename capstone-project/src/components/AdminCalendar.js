import React, { Component } from 'react'
import { connect } from 'react-redux'
import BigCalendar from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



BigCalendar.momentLocalizer(moment);


class AdminCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      selectedEvent: {}
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle = (...args) => {

    let theEvent = this.props.calendar.filter(event => event._id == args[0].id)[0]
    console.log('the event', theEvent)
    this.setState({
      modal: !this.state.modal,
      selectedEvent: theEvent
    });
  }
toggleClose = () => {
  this.setState({
    modal: !this.state.modal
  })
}



  consolidateEventData = (arr) => arr.map(event => {
    let newDate = moment(event.date).add(moment.duration(1, 'days'))
    return   {
      'start': new Date(newDate),
      'end': new Date (newDate),
      'title': event.event_name,
      'id': event._id
    }
  })

  render(){
    let listOfCalendars = this.props.calendar.map(item => item)

    return(

      <div style={{height: '40em', marginLeft: '6em', marginTop: '2em'}}>

      <BigCalendar
        selectable
        popup events={this.consolidateEventData(listOfCalendars)}
        defaultDate={new Date()}
        defaultView="month"
        onSelectEvent={this.toggle}
   />
   <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
     <ModalHeader toggle={this.toggleClose}><strong>Schedule Event</strong></ModalHeader>
     <ModalBody>

      <h6><strong>Provider Name:</strong> {this.state.selectedEvent.event_name}</h6>
      <h6><strong>Start Time:</strong> {this.state.selectedEvent.pickup_time}</h6>
      <h6><strong>End Time:</strong> {this.state.selectedEvent.activities_end}</h6>

      <h6><strong>Pickup Address:</strong> {this.state.selectedEvent.pickup_address}</h6>
      <h6><strong>Dropoff Address:</strong> {this.state.selectedEvent.dropoff_address}</h6>
      <h6><strong>Assigned Client:</strong> {this.state.selectedEvent.assigned_child}</h6>

      <h6><strong>Hours:</strong> {this.state.selectedEvent.hours}</h6>
      <h6><strong>Hours Type:</strong> {this.state.selectedEvent.hours_type}</h6>
     </ModalBody>
   </Modal>
      </div>

    )
  }
}

function mapStateToProps(state){
  return {calendar: state.calendarReducer}
}

export default connect(mapStateToProps)(AdminCalendar)
