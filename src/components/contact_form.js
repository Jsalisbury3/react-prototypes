import React, {Component} from 'react';

class ContactForm extends Component{
    render(){
        return(
            <form>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" name='firstName'/>
                </div>
                <div className="form-group">
                    <label>Lase Name</label>
                    <input type="text" className="form-control" name='lastName'/>
                </div>
            </form>
        )
    }
}

export default ContactForm; 