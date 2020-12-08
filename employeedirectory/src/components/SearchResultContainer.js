import React, { Component } from "react";
import ResultList from "./ResultList";
import API from "../utils/API";
import SearchForm from "./SearchForm";

class SearchResultContainer extends Component {
    state = {
        search: "",
        results: [],
        filteredResults: []
    };

    componentDidMount() {
        API.getData()
            .then(response => {
                this.setState({ results: response.data.results, filteredResults: response.data.results })
            }).catch(err => console.log(err));
    }

    handleInputChange = event => {
        event.preventDefault();
        console.log(event);
        this.setState({ search: event.target.value })
    };



    render() {
        return (
            <div>
                <SearchForm
                    handleInputChange={this.handleInputChange} 
                    value={this.state.search}/>
                <ResultList results={this.state.results} />
            </div>
        );
    }
}

export default SearchResultContainer;