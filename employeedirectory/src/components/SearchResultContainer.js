import React, { Component } from "react";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        API.getData()
            .then(response => {
                this.setState({ results: response.data.results, resultsFiltered: response.data.results })
            }).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <ResultList results={this.state.results} />
            </div>
        );
    }
}

export default SearchResultContainer;