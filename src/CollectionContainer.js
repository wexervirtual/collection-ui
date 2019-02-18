import React, { Component } from 'react';
import { Typography, MuiThemeProvider, CssBaseline, Button } from "@material-ui/core";
import theme from "./shared/theme"
import WSelect from './components/WSelect'
import filter from "./shared/filter"
import WTable from './components/WTable';
import { levels, durations } from "./shared/globals"

class CollectionContainer extends Component {
  state = {
    duration: [],
    level: [],
    type: [],
    data: [
      {
        title: 'hej',
        insync: 1,
        class_type: 'Cardio',
        level: 'Beginner',
        duration: 600
      }
    ]
  }

  componentDidMount() {
    const data = [];
    for (let i = 0; i < 20; i++) {
      data.push({
        title: `hej_${i}`,
        insync: 1,
        class_type: 'Cardio',
        level: 'Beginner',
        duration: 600
      });
    }
    this.setState({ data });
  }


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {

    const args = {
      duration: this.state.duration,
      level: this.state.level
    }

    const result = filter(this.state.data, args);


    return (
      <div>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Typography variant="h4">Featured collection</Typography>
          <Typography variant="body1">Please note: selecting featured items here will override MASTER selection unless it is reverted using the button below.</Typography>
          <Typography variant="body2">Override MASTER settings</Typography>
          <WSelect
            value={this.state.level}
            onChange={this.handleChange}
            name="level"
            label="Level"
            options={levels}>
          </WSelect>
          <WSelect
            value={this.state.duration}
            onChange={this.handleChange}
            name="duration"
            label="Duration"
            options={durations}>
          </WSelect>
          <div>
            <WTable data={result} />
          </div>
          <Button color="primary" variant="contained">Save settings</Button>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default CollectionContainer;
