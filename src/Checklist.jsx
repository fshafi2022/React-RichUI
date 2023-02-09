import React,{useState} from 'react'


const Checklist = () => {
    
    const[inputValues, setinputValue] = useState({
        language:[],
        response:[]
    })

    const handleChange = (e)=>{
        const {checked, value} = e.target;
        const {language} = inputValues
                console.log(value);
                if(checked){
                    setinputValue({
                        language: [...language, value],
                        response: [...language, value],
                    })
                }else{
                    setinputValue({
                         language: language.filter((e)=> e !== value),
                         response: language.filter((e)=> e !== value),
                    })
                   
                }
    }

  return (
    <>
        <div className="container">
        <div className="flex-box">
            <div className="checkbox">
            <div className="row">
        <h1>Your Programming expertise lies in what language?</h1>
            <div className="col-6">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="javascript" name="complanguage" onChange={handleChange} id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">Javascript</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="C#" name="complanguage" onChange={handleChange} id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">C#</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="c++" name="complanguage" onChange={handleChange} id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">C++</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="c" name="complanguage" onChange={handleChange} id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">C</label>
            </div>
            </div>
            <div className="col-6">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="java" name="complanguage" onChange={handleChange} id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">Java</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="php" name="complanguage" onChange={handleChange} id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">PHP</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="typescript" name="complanguage" onChange={handleChange} id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">Typescript</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="python" name="complanguage" onChange={handleChange} id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">Python</label>
            </div>
                </div>
        </div>
        <div className="row">
        <div className="txt2">
        <h3> You're proficient in the following languages:</h3>
            <textarea value={inputValues.response} col="5" row="7" className="txtatrea">

            </textarea>
        </div>
       
        </div>
            </div>
        </div>
        
        </div>
    </>
    
  )
}

export default Checklist