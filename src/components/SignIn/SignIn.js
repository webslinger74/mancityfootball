import React, { Component } from 'react';
import FormField from '../UI/formfields';
import { validate  } from '../UI/misc';
import { firebase } from '../../firebase';

class SignIn extends Component {
        state = {
            formError:false,
            formSuccess:'',
            formdata:{
                email:{
                    element:'input',
                    value:'',
                    config:{
                        name:'email_input',
                        type:'email',
                        placeholder:'Enter your email'
                    },
                    validation:{
                        required:true,
                        email:true
                    },
                    valid:false,
                    validationMessage:''
                },
                password:{
                    element:'input',
                    value:'',
                    config:{
                        name:'password_input',
                        type:'password',
                        placeholder:'Enter your Password'
                    },
                    validation:{
                        required:true,
                    },
                    valid:false,
                    validationMessage:''
                }
            }
          }
        
          updateForm(element){
            const newFormdata = {...this.state.formdata}
            console.log(newFormdata, "the formdate checked")
            const newElement = {...newFormdata[element.id]}
            newElement.value = element.event.target.value;


//validation
            let valiData = validate(newElement);
            newElement.valid = valiData[0];
            newElement.validationMessage = valiData[1];




            newFormdata[element.id] = newElement;
            this.setState({
                formError:false,
                formdata:newFormdata
            },() => {
                console.log(this.state.formdata.email.value);
            })

    }

    submitForm(event){
        event.preventDefault();
        let data = {};
        let formIsValid = true;
        //there is only 1 key here email
        for(let key in this.state.formdata){
            data[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }
       if(formIsValid){
           console.log(data, "the data from the signin form");
           firebase.auth()
           .signInWithEmailAndPassword(data.email, data.password)
           .then(() => {
                console.log('user is auth');
                this.props.history.push('/dashboard');
           }).catch((error)=> {
                 this.setState({
                 formError:true
            })
           })

       } else {
        
           this.setState({
               formError:true
           })
       }

    }
    
    
    render() { 
        return (
            <div className="container">
                <div className="signin_wrapper" style={{margin:'100px'}}>
                    <form onSubmit={(event) => this.submitForm(event)}>
                        
                        <h2>Please Login</h2>
                        

                        <FormField 
                                id={'email'}
                                formdata={this.state.formdata.email}
                                change={(element) => this.updateForm(element)}
                                />

                        <FormField 
                                id={'password'}
                                formdata={this.state.formdata.password}
                                change={(element) => this.updateForm(element)}
                                />


                        {this.state.formError ? <div className="error_label">
                        Email/Password not correct</div>: null}
                       
                        <button onClick={(event)=> this.submitForm(event)}>Log In</button>
                        
                         </form>



                </div>
            </div>
          );
    }
}
 
export default SignIn;
