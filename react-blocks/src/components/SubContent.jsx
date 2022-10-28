import React, { Component } from 'react';
import styles from "./Component.module.css"

class SubContent extends Component {
    render () {
        return (
            <div className= {styles.subcontent}>SubContent
                <div>
                {this.props.SubContent}    
                </div>
            
            </div>
        )
    }
}

export default SubContent;