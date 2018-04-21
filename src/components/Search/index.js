import React, { Component } from 'react';
import Button from '../Button';

class Search extends Component {
    componentDidMount(){
        if(this.input){
            this.input.focus();
        }
    }

    render(){
        const {
            value, 
            onChange,
            onSubmit,
            children
        } = this.props;

        return (
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    value={value}
                    onChange={onChange}
                    ref={el => { this.input = el; }}
                />
                <Button type="submit">
                    {children}
                </Button>
            </form>
        )
    }
}

export default Search;