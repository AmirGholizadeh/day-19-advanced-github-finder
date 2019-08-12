import React from 'react';

class Find{
    constructor(){
        this.clientId='6c08bd510d2109b3d14e';
        this.clientSecret="29a2a5c2f12ad27490e5ea5dff32925dedf893b4";
    }
    
}
 class Add extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="output">
                <div className="box-1">
                    <h1 id="name">{this.props.name}</h1>
                    <a href={this.props.url}><img src={this.props.avatar}/></a>
                    </div>
                <ul className="box-2">
                        <li id="login">Logined as : {this.props.login}</li>
                        <li id="id">ID : {this.props.id}</li>
                        <li id="followers">{this.props.followersNumber} Followers in total, Including {this.props.followers}</li>
                        <li id="following">{this.props.following} Following in total</li>
                        <li id="type">Type : {this.props.type}</li>
                        <li id="company">Company : {this.props.company}</li>
                        <li id="location">Location : {this.props.location}</li>
                        <li id="email">Email : {this.props.email}</li>
                        <li id="bio">Bio : {this.props.bio}</li>
                        <li id="hireable">Hireable : {this.props.hire}</li>
                        <li id="public-repos">Public repos : {this.props.pRepos}</li>
                        <li id="public-gists">Public gists : {this.props.pGists}</li>
                        <li id="created-at">Created at : {this.props.created}</li>
                        <li id="updated-at">Last updated at : {this.props.updated}</li>
                        <li id="repos">Repos : {this.props.repos}</li>
                </ul>
            </div>
        );
    }
}
