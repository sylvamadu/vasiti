import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';

function DetailsForm() {
    const KEY = "userData";

    let history = useHistory()
    const [upload, setUpload] = useState()
    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[story, setStory] = useState('')
    const [service, setService] = useState()

    // const[userData, setUserData] = useState([])

    const handleChange = e =>{
        const target = e.target;
        if(target.checked){
            setService(target.value)
        }
    }

   


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!story || !firstName || !lastName || !upload || !service){
            return 
        }
        
        else{
            const user = {
                firstName,
                lastName,
                story,
                upload,
                service
            }
            console.log(user)
            localStorage.setItem(KEY, JSON.stringify(user));
            // setUserData([...userData, {user}])
            // console.log(userData)
            history.push('/')
        }
        
        
    }
 


  return (
    <div className='details'>
        <div className="shell">
            <h2>Share your amazing story!</h2>
            <form>
                <div className="input-group">
                    <label >Upload your Picture:</label>
                    <input type="file" onChange={(e)=>setUpload(URL.createObjectURL(e.target.files[0]))}  />
                </div>
                <div className="input-combine">
                    <div className="inner">
                        <label >First Name:</label>
                        <input type="text" name='firstName' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                    </div>
                    <div className="inner">
                        <label >Last Name:</label>
                        <input type="text" name='lastName' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                    </div>
                </div>
                <div className="input-group">
                    <label >Share your Story:</label>
                    <textarea cols="30" rows="10" name='story' value={story} onChange={(e)=>setStory(e.target.value)}></textarea>
                </div>
                <div className="input-select">
                    <label >What did you interact with Vasiti as?</label>
                    <div className="radio">
                        <input type="radio" value="customer" checked={service === 'customer'} onChange={handleChange} /> customer
                        <input type="radio" value="vendor" checked={service === 'vendor'} onChange={handleChange} /> vendor
                    </div>
                </div>
                <button type="submit" onClick={handleSubmit}>Share your story!</button>
            </form>
        </div>
        
    </div>
  )
}

export default DetailsForm