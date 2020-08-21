import React from 'react'

// [False -ve] : broken tests, but not broken app.
// [False +ve] : broken app, but not broken tests.
class Accordion extends React.Component {
    // state = { openIndex: 0 } // [False -ve] case, shown below
    // setOpenIndex = openIndex => this.setState({ openIndex })  // [False -ve] case, shown below
    state = { openIndexes: [0] }
    setOpenIndex = openIndex => this.setState({ openIndexes: [openIndex] })

    render() {
        // const { openIndex } = this.state  // [False -ve] case, shown below
        const { openIndexes } = this.state

        // console.log('openIndexes', openIndexes);

        return (
            <div>
                {this.props.items.map((item, index) => (
                    <div id={`container${index}`} key={index}>
                        {/* <button onClick={() => this.setOpenIndex(index)}> // [False +ve] case, shown below*/}
                        {/* If we use @testing-library - we can change state variables names and 
                            modify functions like below without any FALSE -VE/+VE 
                        */}
                        <button onClick={() => this.setOpenIndex(index)}> 
                            {item.title}
                        </button>
                        
                        {/* {index === openIndex ? (  // [False -ve] case, shown below*/}
                        {
                        // openIndexes[index] ? 
                        (
                            <div id={`content${index}`} key={index}>
                                {item.contents}
                            </div>
                        ) 
                        // : null
                        }
                    </div>
                ))}
            </div>
        )
    }
}
export default Accordion;