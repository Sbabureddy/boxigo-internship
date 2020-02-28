import React, { Component } from "react";
import { UncontrolledCollapse } from "reactstrap";

export class PlansComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    };
  }
  componentDidMount() {
    fetch("http://boxigo.in/sampleAPI.php")
      .then(res => res.json())
      .then(data => this.setState({ places: data.Customer_Estimate_Flow }));
  }
  render() {
    return (
      <div className="container">
        {this.state.places.map(place => (
          <div>
            <li
              key={place.estimate_id}
              className="card border-dark list-unstyled mt-2"
            >
              <a href="#">{place.estimate_id}</a>
              <div className="row">
                <div className="col-md">{place.property_size}</div>
                <div className="col-md">{place.moving_from}</div>
                <div className="col-md">
                  {place.moving_on}
                  <button className="btn btn-primary" id={place.estimate_id}>
                    View Move Details
                  </button>
                </div>
                <div className="col-md">{place.moving_to}</div>
                <div className="col-md">{place.custom_status}</div>
              </div>
              <div className="row">
                <div className="col-md text-left">
                  Order Date: {place.date_created}
                </div>
              </div>
            </li>
            <div className="row container">
              <UncontrolledCollapse
                toggler={place.estimate_id}
                className="container ml-2 mr-2"
              >
                <h4>Item Details</h4>
                <div className="row container">
                  <div className="col-md-6">
                    <h5>Living Room</h5>
                    <div className="d-flex">
                      <div>
                        <h5>{place.items.rooms.living_room.center_table} </h5>
                        <h5>center_table</h5>
                      </div>
                      <div>
                        <h5>{place.items.rooms.living_room.computer_table}</h5>
                        <h5>computer_table</h5>
                      </div>
                      <div>
                        <h5>{place.items.rooms.living_room.foldable_chair}</h5>
                        <h5>foldable_chair</h5>
                      </div>
                      <div>
                        <h5>{place.items.rooms.living_room.home_theater}</h5>
                        <h5>home_theater</h5>
                      </div>
                      <div>
                        <h5>
                          {place.items.rooms.living_room.non_foldable_chair}
                        </h5>
                        <h5>non_foldable_chair</h5>
                      </div>
                    </div>
                  </div>

                  {/* bed room  */}
                  <div className="col-md-6">
                    <h5>Bed Room</h5>
                    <div className="d-flex">
                      <div>
                        <h5>{place.items.rooms.bed_room.sofa_1_seater}</h5>
                        <h5>sofa_1_seater</h5>
                      </div>
                      <div>
                        <h5>{place.items.rooms.bed_room.sofa_2_seater}</h5>
                        <h5>sofa_2_seater</h5>
                      </div>
                      <div>
                        <h5>{place.items.rooms.bed_room.sofa_3_seater}</h5>
                        <h5>sofa_3_seater</h5>
                      </div>
                      <div>
                        <h5>{place.items.rooms.bed_room.tv_cabinet}</h5>
                        <h5>tv_cabinet</h5>
                      </div>
                      <div>
                        <h5>{place.items.rooms.bed_room.study_table}</h5>
                        <h5>study_table</h5>
                      </div>
                    </div>
                  </div>
                  {/* Kitchen row */}
                  <div className="col-md-6">
                    <h4>Kitchen</h4>
                    <div className="d-flex">
                      <div>
                        <h5>{place.items.rooms.kitchen.sofa_1_seater}</h5>
                        <h5>sofa_1_seater</h5>
                      </div>
                      <div>
                        <h5>{place.items.rooms.kitchen.sofa_2_seater}</h5>
                        <h5>sofa_2_seater</h5>
                      </div>
                      <div>
                        <h5>{place.items.rooms.kitchen.sofa_3_seater}</h5>
                        <h5>sofa_3_seater</h5>
                      </div>
                      <div>
                        <h5>{place.items.rooms.kitchen.tv_cabinet}</h5>
                        <h5>tv_cabinet</h5>
                      </div>
                      <div>
                        <h5>{place.items.rooms.kitchen.study_table}</h5>
                        <h5>study_table</h5>
                      </div>
                    </div>
                  </div>
                  {/* Other row */}
                  <div className="col-md-6">
                    <h4>Other</h4>
                    <div className="d-flex">
                      <div>
                        <h5>{place.items.rooms.others.sofa_1_seater}</h5>
                        <h5>sofa_1_seater</h5>
                      </div>
                      <div>
                        <h5>{place.items.rooms.others.sofa_2_seater}</h5>
                        <h5>sofa_2_seater</h5>
                      </div>
                      <div>
                        <h5>{place.items.rooms.others.sofa_3_seater}</h5>
                        <h5>sofa_3_seater</h5>
                      </div>
                      <div>
                        <h5>{place.items.rooms.others.tv_cabinet}</h5>
                        <h5>tv_cabinet</h5>
                      </div>
                      <div>
                        <h5>{place.items.rooms.others.study_table}</h5>
                        <h5>study_table</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </UncontrolledCollapse>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PlansComponent;
