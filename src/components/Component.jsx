import React from "react";
import Button from "./Button";



class Component extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {posts: []}
    }

   hadnleRequest = async() => {
            const request = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                return response.json()
            }).then((data) => {
                this.setState({posts: data})
                console.log(data);
            }).catch((error) => {
                console.error(error);
            })
   }
  

   render() {

    const {posts} = this.state
    
    return(
        <div>
                    
            <Button onClick = {this.hadnleRequest}
                    data = {posts}>
            </Button>
        </div>
    );
   }
}

export default Component