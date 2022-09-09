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
         return (<Project project={project} x='sasas'/>)
        })
    }

    render(){
        return(
        <div>
 xxxxxff

 {this.RenderedProjects()}
        </div>)
    }
}
const mapStateToProps = state =>{
    return {Fetch_Projects : _.mapKeys(state.Fetch_Projects.data , 'id') }
}
export default connect(mapStateToProps , {fetchProjects} ) (ProjectList) ;