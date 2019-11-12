import React, { Component } from 'react';
import AdminLayout from '../../../hoc/AdminLayout';
import FormField from '../../UI/formfields';
import { validate } from '../../UI/misc'
import  { firebaseTeams } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../UI/misc';

class AddEditMatch extends Component {
    state = { 


        matchId:'',
        formType:'',
        formError:false,
        formSuccess:'',
        teams:[],
        formData:{
            date:{
            element:'input',
            value:'',
            config:{
                label:'Event date',
                name:'date_input',
                type:'date'
            },
            validation:{
                required:true
            },
            valid:false,
            validationMessage:'',
            showLabel:true
            },
            local:{
                element:'select',
                value:'',
                config:{
                    label:'Select Home Team',
                    name:'select_local',
                    type:'select',
                    options:[]
                },
                validation:{
                    required:true
                },
                valid:false,
                validationMessage:'',
                showLabel:false
                },
            resultLocal:{
                    element:'input',
                    value:'',
                    config:{
                        label:'Result local',
                        name:'result_local_input',
                        type:'text'
                    },
                    validation:{
                        required:true
                    },
                    valid:false,
                    validationMessage:'',
                    showLabel:false
                    },
                    away:{
                        element:'select',
                        value:'',
                        config:{
                            label:'Select Away Team',
                            name:'select_away',
                            type:'select',
                            options:[]
                        },
                        validation:{
                            required:true
                        },
                        valid:false,
                        validationMessage:'',
                        showLabel:false
                        },
                    resultAway:{
                            element:'input',
                            value:'',
                            config:{
                                label:'Result away',
                                name:'result_away_input',
                                type:'text'
                            },
                            validation:{
                                required:true
                            },
                            valid:false,
                            validationMessage:'',
                            showLabel:false
                            },
                            referee:{
                                element:'input',
                                value:'',
                                config:{
                                    label:'Referee',
                                    name:'referee_input',
                                    type:'text'
                                },
                                validation:{
                                    required:true
                                },
                                valid:false,
                                validationMessage:'',
                                showLabel:true
                                },
                                stadium:{
                                    element:'input',
                                    value:'',
                                    config:{
                                        label:'Stadium',
                                        name:'stadium_input',
                                        type:'text'
                                    },
                                    validation:{
                                        required:true
                                    },
                                    valid:false,
                                    validationMessage:'',
                                    showLabel:true
                                    },
            result:{
                element:'select',
                value:'',
                config:{
                    label:'Team Result',
                    name:'select_result',
                    type:'select',
                    options:[
                        {key:'W', value:'W'},
                        {key:'L', value:'L'},
                        {key:'D', value:'D'},
                        {key:'N/A', value:'N/A'}
                    ]
                },
                validation:{
                    required:true
                },
                valid:false,
                validationMessage:'',
                showLabel:true
                },
                final:{
                    element:'select',
                    value:'',
                    config:{
                        label:'Game Played',
                        name:'select_played',
                        type:'select',
                        options:[
                            {key:'Yes', value:'Yes'},
                            {key:'No', value:'No'}
                        ]
                    },
                    validation:{
                        required:true
                    },
                    valid:false,
                    validationMessage:'',
                    showLabel:true
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

componentDidMount = () => {
    firebaseTeams.once('value').then((snapshot) => {
        console.log(snapshot, "this is the snapshot");
          const matches = firebaseLooper(snapshot);
          const teamNames = [];
          matches.forEach((team) => {
              teamNames.push({
                  key: team.name,
                  value:team.name});
          })
            this.setState({
                teams:teamNames,
                
            }, () => {
                console.log(this.state.teams, "the teams in state")

            })
            this.UpdateFields(this.state.teams);
        
    })

  
}
UpdateFields = (teams) => {
        const newFormData = {
            ...this.state.formData
        }
        for(let key in newFormData){
            if(key === 'local' || key === 'away'){
                newFormData[key].config.options = teams;
            }
        }
        this.setState({
            formData:newFormData
        },()=> {
            console.log(this.state.formData, "the form data after importing");
        })

        



}
    
    render() { 
        return ( 
            <AdminLayout>

                <div style={{paddingLeft:'100px'}}>
                <div>
                <h2>{this.state.formType}</h2>
                </div>
                <form onSubmit={(event) => this.submitForm(event)}>
                    <div style={{width:'50%'}}>
                <div className="wrapper">
                        <div className="left">
                <FormField id={'date'} formdata={this.state.formData.date}
                                change={(element) => this.updateForm(element)}
                                />
                </div>
                </div>
                </div>
                <div className="select_team_layout">
                    <div className="label_inputs">Local</div>
                    <div className="wrapper">
                        <div className="left">
                        <FormField id={'local'} formdata={this.state.formData.local}
                                 change={(element) => this.updateForm(element)}
                                />
                        </div>
                    <div className="left">
                    <FormField id={'resultLocal'} formdata={this.state.formData.resultLocal}
                                 change={(element) => this.updateForm(element)}
                                />

                    </div>
                    </div>
                   
                    <div className="label_inputs">Away</div>
                    <div className="wrapper">
                    <div className="left">
                        <FormField id={'away'} formdata={this.state.formData.away}
                                 change={(element) => this.updateForm(element)}
                                />
                        </div>
                    <div className="left">
                    <FormField id={'resultAway'} formdata={this.state.formData.resultAway}
                                 change={(element) => this.updateForm(element)}
                                />

                    </div>
                    </div>

            <div className="split_fields" style={{width:'50%'}}>
            <div className="wrapper">
            <div className="left">
            <div>
            <FormField id={'referee'} formdata={this.state.formData.referee}
                                 change={(element) => this.updateForm(element)}
                                />
                                </div>
                                </div>
                                </div>
            <div className="wrapper">
            <div className="left">
            <div>
                 <FormField id={'stadium'} formdata={this.state.formData.stadium}
                                 change={(element) => this.updateForm(element)}
                                /> </div>

                </div>
            
              
                                </div>
            </div>

            <div className="split_fields" style={{width:'50%'}}>
            <div className="wrapper">
            <div className="left">
            <div>
            <FormField id={'result'} formdata={this.state.formData.result}
                     change={(element) => this.updateForm(element)}
                    />  </div>     
            </div>
            </div>
            <div className="left">
            <div>
<           FormField id={'final'} formdata={this.state.formData.final}
                     change={(element) => this.updateForm(element)}
                    />  </div>    
            </div>

            </div>

            </div>


                <div className="success_label">{this.state.formSuccess}</div>
                {this.state.formError ?
                <div className="error_label">
                    Something is wrong
                </div>:''}
                <div className="admin_submit">
                    <button onclick={(event) => this.submitForm(event)}>
                        {this.state.formType}
                    </button>
                </div>

                </form>
               </div>   

            </AdminLayout>
         );
    }
}
 
export default AddEditMatch;