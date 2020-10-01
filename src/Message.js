import React,{forwardRef} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './App.css';



const Message=forwardRef(({message,username},ref) =>{

    const isUser= username===message.username;

    return (
       <div ref={ref} className={`message ${isUser && 'message_user'}`}>
        <Card  className={isUser? "message_userCard": "message_guestCard"}>
        <CardContent  className={isUser? "message_userCardCol": "message_guestCardCol"}>
            <Typography  gutterBottom>
                    {!isUser && `${message.username || 'unknown user'}`}
            </Typography>
            <Typography variant="h5" component="h2">
                    {message.message}
            </Typography>
        </CardContent>
        </Card>
       </div>        
     
    )
})

export default Message
