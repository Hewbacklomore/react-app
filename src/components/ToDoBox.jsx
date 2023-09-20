import React from "react";
import Item from "./Item";
import Form from "./Form";
import { v4 as uuidv4 } from 'uuid';


class ToDoBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: " ",
            items: [],
        }
    }

    handleOnChange = ({target}) => {
        this.setState({text: target.value})
    }

    addItem = (e) => {
        e.preventDefault();
        const { text, items} = this.state
        if(text.trim() === "") return

        const newItem = {
            id: this.uniqueId(),
            title: text
        }

        this.setState({
            items: [newItem, ...items],
            text: "",
        });
    };

    uniqueId() {
        return uuidv4();
    }

    removeToDoItem = (id) => {
        const { items } = this.state;
        console.log(items);
        const deleteItem = items.filter((item) => item.id !== id)
        this.setState({items: deleteItem})
    }

   render() {

    const {text, items} = this.state;
    
    return(
        <div>
            <div className="mb-3">
                <Form 
                    value = {text}
                    onSubmit = {this.addItem}
                    onChange = {this.handleOnChange}  
                />
            </div>
            <div>
            {items.map((item) => (
                <Item
                    key={item.id}
                    text = {item.title} 
                    onRemove={() => this.removeToDoItem(item.id)}            
                />
            ))}
           </div>

        </div>
    );
   }
}

export default ToDoBox