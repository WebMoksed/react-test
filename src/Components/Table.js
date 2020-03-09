import React, { Component } from "react";
import MainData from "../assets/json/data";
import SearchInput, { createFilter } from "react-search-input";
import Moment from "moment";
export default class componentName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: ""
    };
  }
  componentDidMount() {
    this.setState({
      Data: MainData
    });
  }

  searchUpdated = term => {
    const { Data } = this.state;
    var result = this.state.Data.filter(data => {
      if (data.name.includes(term)) {
        return data;
      }
    });
    if (term != "") {
      this.setState({
        Data: result
      });
    } else {
      this.setState({
        Data: MainData
      });
    }

    console.log("term", term);
  };
  render() {
    const { Data } = this.state;
    console.log("term", Data);

    return (
      <div className="campaign-table">
        <div className="container-html">
          <div className="date-search">
            <div className="input-dates">
              <input type="text" placeholder="Start Date" />
              <input type="text" placeholder="End Date" />
            </div>
            <div className="search-right">
              {/* <input type="text" placeholder="Search" /> */}
              <SearchInput
                className="search-input"
                onChange={this.searchUpdated}
              />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Active</th>
                <th>Budget</th>
              </tr>
              {Data &&
                Data.length > 0 &&
                Data.map((data, key) => (
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.startDate}</td>
                    <td>{data.endDate}</td>
                    {/* <td>{data.dataEnd}</td> */}
                    <td>
                      {Moment(data.startDate).isBetween(
                        Data[0].startDate,
                        Data[Data.length - 1].startDate
                      )
                        ? "Active"
                        : "In Active"}{" "}
                    </td>
                    <td>{(data.Budget % 1000) + "K"}</td>
                  </tr>
                ))}
            </thead>
          </table>
        </div>
      </div>
    );
  }
}
