import React from 'react';

class LifeCycleExamples extends React.Component {
    state = {
        data: null
    }
    componentWillMount() {
        alert('mounted!');
    }

    componentDidMount() {
        alert('mounted after first render')
        
        const url = 'https://jsonplaceholder.typicode.com/todos';
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({data:data}))
    }
    componentWillUnmount() {
        alert('UNmounted!')
    }
render() {
    alert('render'); 

    return (
        <div>
            <h2>Hello!</h2>

            {!this.state.data ? <h2>Loading...</h2> : this.state.data.map(element => {
                const {id, title } = element;
                return <p key={id}> {title}</p>
            })}
        </div>
    )
}

}

export default LifeCycleExamples;