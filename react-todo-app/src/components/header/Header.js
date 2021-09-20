import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }
    
      render() {
        return (
          <div className="Header">
            <header>
                <h1>React To-Do list</h1>
            </header>
          </div>
        );
      }
    }
      
    export default Header;