import React from 'react';
import './styles.scss';
import {handleExpandClick, handleEditClick} from './actions';
import { connect } from 'react-redux';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CreateIcon from '@material-ui/icons/Create'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Modal } from 'react-bootstrap';
import UpdateTaskForm from './update-form';

// const card_button = {
//     marginLeft: 20
//   }

// const modal_style = {
//     width : 800
// }

// class TaskCard extends React.Component {
//     render() {
//         return(
//         <div>
//         <Card className="card">
//         <CardActionArea>
//         {/* <CardMedia
//           className="media"
//           image=""
//           title="Contemplative Reptile"
//         /> */}
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h6">
//             <p><textarea class="form-control form-rounded" rows="1">{this.props.title}</textarea></p>
//             <p><textarea class="form-control form-rounded" rows="2">{this.props.description}</textarea></p>
            
//           </Typography>
          
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" variant = "contained" color="primary" style = {card_button} onClick={() => this.props.handleUpdateOpen(true)}>
//           Update
//         </Button>
//         <Button size="small" variant = "contained" color="secondary">
//           Delete
//         </Button>
//       </CardActions>
//     </Card>

//     <Modal show={this.props.expanded} onHide={()=>{this.props.handleUpdateClose(false)}} >
            
//     <Modal.Header closeButton>
//     <Modal.Title >Update Task</Modal.Title>
//     </Modal.Header>
//     <Modal.Body >
//         <UpdateTaskForm
//         dataHandler = {this.props.getData}
//         />
//     </Modal.Body>

//     </Modal>
// </div>
//         );
//     }
// }


class TaskCard extends React.Component {
    
    render() {
        console.log("card props: ", this.props);

        return (
    <div>
      <Card style = {{maxWidth: 400}}>
      <CardHeader
        avatar={
          <Avatar aria-label="Letter" style = {{backgroundColor: red[500]}}>
            T
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={this.props.title}
        subheader="created At"
      />
      <CardActions >
        <IconButton aria-label="Update" onClick={() => {
            // this.props.handleEditClick(!this.props.edit);    
            console.log("Inside onclick: " + this.props.title); 
            <Modal show={true} onHide={()=>{
                this.props.handleEditClick(false)
                
                }}>
                <Modal.Header closeButton>
                 <Modal.Title >Edit Task</Modal.Title>
                 </Modal.Header>
                 <Modal.Body >
                    <UpdateTaskForm
                        prevTitle = {this.props.title}
                        prevDesc = {this.props.description}
                        taskId = {this.props.id}
                    />
                </Modal.Body>
            
            </Modal>  
        }}>
          <CreateIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton
        //   className={clsx(classes.expand, {
        //     [classes.expandOpen]: this.props.expanded,
        //   })}
          style = {{transform: 'rotate(180deg)', marginLeft: 'auto'}}
          onClick={() => this.props.handleExpandClick(!this.props.expanded)}
          aria-expanded={this.props.expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={this.props.expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>DESCRIPTION:</Typography>
          <Typography paragraph>
          {this.props.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    
    {/* <Modal show={this.props.edit} onHide={()=>{
    this.props.handleEditClick(false)
    
    }}>
    <Modal.Header closeButton>
     <Modal.Title >Edit Task</Modal.Title>
     </Modal.Header>
     <Modal.Body >
        <UpdateTaskForm
            prevTitle = {this.props.title}
            prevDesc = {this.props.description}
            taskId = {this.props.id}
        />
    </Modal.Body>

    </Modal> */}
    </div>
        );
    }
}


const mapStateToProps = state => ({
    expanded: state.postReducer.expanded,    
    edit : state.postReducer.edit,

})
export default connect(mapStateToProps, {handleExpandClick, handleEditClick})(TaskCard);

