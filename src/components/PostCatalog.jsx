import React from "react";

class PostCatalog extends React.Component {
    render() {
        const { data } = this.props
        
        return(
            
           <div >
                <div class="posts">
                    <ul class="posts__list">
                    {data.map((item) => (
                        <li key={item.id} class="posts_single-post" data-post-id={item.id}>
                            <h3 class="posts__post-title">{item.title}</h3>
                            <p class="posts__post-description">{item.body}</p>
                        </li>
                         ))}
                    </ul>
                </div>

          </div>
        )
    }
}

export default PostCatalog