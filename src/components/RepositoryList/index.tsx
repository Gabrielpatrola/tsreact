/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

interface Repository {
  id: number;
  name: string;
}

interface Props {
  repositories: Repository[];
}

interface State {
  newRepository?: string;
}

export default class RepositoryList extends Component<Props, State> {
  state = {
    newRepository: '',
  };

  componentDidMount() {}

  render() {
    const { repositories } = this.props;
    const { newRepository } = this.state;
    return <h1> Hello World</h1>;
  }
}
