import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './styles.scss';
import {handleUpdateOpen, handleUpdateClose, getData} from './actions';
import UpdateTaskForm from './update-form';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';


const card_button = {
    marginLeft: 20
  }

const modal_style = {
    width : 800
}

class TaskCard extends React.Component {
    render() {
        return(
        <div>
        <Card className="card">
        <CardActionArea>
        {/* <CardMedia
          className="media"
          image=""
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h6">
            <p><textarea class="form-control form-rounded" rows="1">{this.props.title}</textarea></p>
            <p><textarea class="form-control form-rounded" rows="2">{this.props.description}</textarea></p>
            
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant = "contained" color="primary" style = {card_button} onClick={() => this.props.handleUpdateOpen(true)}>
          Update
        </Button>
        <Button size="small" variant = "contained" color="secondary">
          Delete
        </Button>
      </CardActions>
    </Card>

    <Modal show={this.props.openUpdate} onHide={()=>{this.props.handleUpdateClose(false)}} >
            
    <Modal.Header closeButton>
    <Modal.Title >Update Task</Modal.Title>
    </Modal.Header>
    <Modal.Body >
        <UpdateTaskForm
        dataHandler = {this.props.getData}
        />
    </Modal.Body>

    </Modal>
</div>
        );
    }
}
const mapStateToProps = state => ({
    openUpdate: state.postReducer.openUpdate,
    formData :  state.postReducer.formData,

    
})
export default connect(mapStateToProps, { handleUpdateOpen, handleUpdateClose, getData})(TaskCard);