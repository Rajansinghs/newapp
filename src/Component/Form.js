import React,{useState} from 'react';
import OtherInfo from './OtherInfo';
import PersonalInfo from './PersonalInfo';
import SignUpInfo from './SignUpInfo';

const Form = () => {

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        first: "",
        last: "",
        mobile: "",
        name: " ",
        dob: "",
        recovery: "",
        vehicle: "",
    });

    const FormTitles = ["Sign Up", "Personal Info", "Other"];

    const PageDisplay = () => {
        if(page === 0 ) {
            return <SignUpInfo formData={formData} setFormData={setFormData}/>;
        }else if(page === 1) {
            return <PersonalInfo formData={formData} setFormData={setFormData}/>;
        }else{
            return <OtherInfo formData={formData} setFormData={setFormData}/>;
        }
    }

  return (
    <>
    <h1 className='heading'>Creating new account</h1>
    <div className="main">
    <div className='form'>
    <div className="bar">
        <div className="progressbar">
            <div style={{width: page === 0 ? "33.3%" :page === 1 ? "66.6%" : "100%"}}></div>
        </div>
        </div>
        <div className="form-container">
        <h2 className='sechead'>Let's get started!</h2>
        <p className='para'>Add your details (As per your registered records)</p>
            <div className="header">
                <h1>{FormTitles[page]}</h1>
            </div>
            <div className="body">{PageDisplay()}</div>
            <div className="footer">
                <button 
                disabled= {page ===0}
                onClick={() => {
                    setPage((currPage) => currPage - 1);
                    }}>Prev</button>
                <button
                 onClick={() => {
                    if(page === FormTitles.length-1){
                        alert("Form Submitted");
                        console.log(formData);
                    }else{
                           setPage((currPage) => currPage + 1);
                    }
                    }}>{page === FormTitles.length -1 ? "Submit" : "Next"}</button>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Form;
