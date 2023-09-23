import '@toast-ui/editor/dist/toastui-editor.css';

import React from "react";
import Editor from '@toast-ui/editor';



class MarkDownEditor extends React.Component {

    constructor(props) {
        super(props);
        
    

        this.editor = React.createRef();
    }

    componentDidMount () {
        const { onContentChange } = this.props;
        /* console.log(new Editor); */

        console.log(this.editor.current);

        const editor = new Editor({
            el: this.editor.current,
            hideModeSwitch: true,
        });

        this.elem = editor;

        editor.addHook('change', () => {
            const content = this.editor;
            onContentChange(content)
        });

    }

    componentWillUnmount() {
       this.elem.destroy();
    }

  

   render() {
    
    return(
        <div ref={this.editor}></div>
    );
   }
}

export default MarkDownEditor