import React from 'react';

class Dictionary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            definition: null,
            usage: null,
            userWord: null}
    }
    
    
    dictionary({userWord}) {

        const word = userWord;

        // fetching the json body and stroing in array
        fetch('https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${dictionary.env.DICTIONARY_API_KEY}')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    definition: result.dt,
                    usage: result.t})
            },

            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });
    }

    render() {
        const { error, isLoaded, definition, usage, userWord } = this.state;
        if (error) { return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {return <div>Loading...</div>;
        } else { return (
            <div>
            <h>{userWord}</h>

            <p>Definition: {definition}</p>

            <p>Usage: {usage}</p>
            </div>
        )}
    }
}

export default Dictionary;