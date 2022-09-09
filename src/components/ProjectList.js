import React , {Component} from "react";
import {connect} from "react-redux";
import _ from "lodash";


import { fetchProjects } from "../actions";
import Project from "./Project";


class ProjectList extends Component{
    componentDidMount(){
       this.props.fetchProjects(5,10);
    }

    RenderedProjects=()=>{
         const RenderProjects=Object.values(this.props.Fetch_Projects)
         return RenderProjects.map( project => {
         return (<Project project={project} key={project.id}/>)
        })
    }

    render(){
        return(
        <div className="ui three column grid">
        {this.RenderedProjects()}
        </div>)
    }
}
const mapStateToProps = state =>{
    return {Fetch_Projects : _.mapKeys(state.Fetch_Projects.data , 'id') }
}
export default connect(mapStateToProps , {fetchProjects} ) (ProjectList) ;