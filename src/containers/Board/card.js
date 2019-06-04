import React from 'react';
import './styles.scss';
import { handleExpandClick, handleEditClick, deleteFormdata, getData, handleSnack } from './actions';
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
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Modal } from 'react-bootstrap';
import UpdateTaskForm from './update-form';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

import { black } from 'material-ui/styles/colors';


class TaskCard extends React.Component {
    
  render() {
    console.log("Task card Props: ", this.props);

    return (
      <div style={{paddingTop:2}}>
      
        <Card style={{ maxWidth: 400, borderBottom: black }}>
          <CardHeader
            avatar={
              <Avatar aria-label="Letter" style={{ backgroundColor: red[500] }}>
                {this.props.element.title.charAt(0)}
          </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={this.props.title}
            subheader={Date(this.props.element.createdAt.slice(0,10)).slice(0,15)}
          />
          <CardActions >
            <IconButton aria-label="Update" onClick={() => {this.props.handleEditClick(!this.props.element.editStatus,this.props.element, this.props.formData)}}>
              <CreateIcon />
            </IconButton>
            <IconButton aria-label="Delete" onClick={()=>{this.props.deleteFormdata(this.props.element.id, this.props.token); this.props.getData(this.props.token)}}>
              <DeleteIcon />
            </IconButton>
            <IconButton
              style={{ transform: 'rotate(180deg)', marginLeft: 'auto' }}
              onClick={() => this.props.handleExpandClick(!this.props.element.expandStatus, this.props.element, this.props.formData)}
              aria-expanded={this.props.element.expandStatus}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.props.element.expandStatus} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>DESCRIPTION:</Typography>
              <Typography paragraph>
                {this.props.description}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

        <Modal show={this.props.element.editStatus} onHide={() => {
          this.props.handleEditClick(!this.props.element.editStatus, this.props.element, this.props.formData)
        }}>
          <Modal.Header closeButton>
            <Modal.Title >Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <UpdateTaskForm
              prevTitle={this.props.selectedElement && this.props.selectedElement.title}
              prevDesc={this.props.selectedElement && this.props.selectedElement.description}
              taskId={this.props.selectedElement && this.props.selectedElement.id}
              prevStatus={this.props.selectedElement && this.props.selectedElement.status}
              targetEl={this.props.selectedElement && this.props.selectedElement}
            />
          </Modal.Body>

        </Modal>
        {this.props.isError && 
            <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={this.props.snackOpen}
            autoHideDuration={6000}
            onClose={() => this.props.handleSnack(false)}
            ContentProps={{
                  'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{this.props.updateData}</span>}
                action={[
                  <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={() => this.props.handleSnack(false)}
                  >
                    <CloseIcon />
                  </IconButton>,
                ]}
            
          >
          </Snackbar>
      }
      </div>
    );
  }
}


const mapStateToProps = state => ({
  expanded: state.postReducer.expanded,
  edit: state.postReducer.edit,
  selectedElement: state.postReducer.selectedElement,
  formData: state.postReducer.formData,
  token: state.postReducer.token,
  isError: state.postReducer.isError,
  snackOpen : state.postReducer.snackOpen,
  updateData : state.postReducer.updateData
})
export default connect(mapStateToProps, { handleExpandClick, handleEditClick, deleteFormdata, getData, handleSnack })(TaskCard);
