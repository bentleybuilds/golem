import React, { Component } from 'react';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state={
        'myskills': ['HTML5','CSS3','JavaScript','Node.js','React.js','Vue.js','Amazon Web Services EC2','MongoDB','Docker','Git','MySQL','GitHub','Webpack','PostgreSQL','Express.js','Agile Methodologies','Customer Service','Leadership','Pair Programming']
        };
    }
    
    render() {
        return (
            <div className="view_div skills">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {this.state.myskills.map((skill)=>(
                        <li>{skill}</li>
                        )
                    )}
                </ul>
            </div>
        )
    }
}
export default Skills