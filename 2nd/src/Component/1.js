import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const First = () => {
    const [value, setValue] = useState('?');
    const [value2, setValue2] = useState('?');
    const [value3, setValue3] = useState('?');
    const [value4, setValue4] = useState('?');
    const [value5, setValue5] = useState('?');
    const [value6, setValue6] = useState('?');
    const [value7, setValue7] = useState('?');
    const [value8, setValue8] = useState('?');
    const [value9, setValue9] = useState('?');
    const [value10, setValue10] = useState('?');


    const handleSelect = (e) => {
       
        setValue(e)
    }
    const handleSelect2 = (e) => {
        setValue2(e)
        console.log(e);
    }
    const handleSelect3 = (e) => {
        console.log(e);
        setValue3(e)
    }
    const handleSelect4 = (e) => {
        console.log(e);
        setValue4(e)
    }
    const handleSelect5 = (e) => {
        console.log(e);
        setValue5(e)
    }
    const handleSelect6 = (e) => {
        console.log(e);
        setValue6(e)
    }
    const handleSelect7 = (e) => {
        console.log(e);
        setValue7(e)
    }
    const handleSelect8 = (e) => {
        console.log(e);
        setValue8(e)
    }
    const handleSelect9 = (e) => {
        console.log(e);
        setValue9(e)
    }
    const handleSelect10 = (e) => {
        console.log(e);
        setValue10(e)
    }
    return (
        <>
            <div className="container">
                <div className="row" >
                    <div className="col-1 justify-content-center text-center">
                        <div >1</div>
                        <select onChange={e => handleSelect(e.target.value)} class="form-control" id="exampleFormControlSelect1">
                            <option>?</option>
                            <option>Win</option>
                            <option>Loose</option> </select>

                            
                             

                    </div>

                    <div className="col-1 justify-content-center text-center">
                        <div >2</div>

                       <select onChange={e => handleSelect2(e.target.value)} class="form-control" id="exampleFormControlSelect1">
                            <option>?</option>
                            <option>Win</option>
                            <option>Loose</option> </select>

                    </div>
                    <div className="col-1 justify-content-center text-center">
                        <div >3</div>

                        <select onChange={e => handleSelect3(e.target.value)} class="form-control" id="exampleFormControlSelect1">
                            <option>?</option>
                            <option>Win</option>
                            <option>Loose</option> </select>

                    </div>
                    <div className="col-1 justify-content-center text-center">
                        <div >4</div>

                        <select onChange={e => handleSelect4(e.target.value)} class="form-control" id="exampleFormControlSelect1">
                            <option>?</option>
                            <option>Win</option>
                            <option>Loose</option> </select>

                    </div>
                    <div className="col-1 justify-content-center text-center">
                        <div >5</div>

                        <select onChange={e => handleSelect5(e.target.value)} class="form-control" id="exampleFormControlSelect1">
                            <option>?</option>
                            <option>Win</option>
                            <option>Loose</option> </select>

                    </div><div className="col-1 justify-content-center text-center">
                        <div >6</div>

                        <select onChange={e => handleSelect6(e.target.value)} class="form-control" id="exampleFormControlSelect1">
                            <option>?</option>
                            <option>Win</option>
                            <option>Loose</option> </select>

                    </div><div className="col-1 justify-content-center text-center">
                        <div >7</div>

                        <select onChange={e => handleSelect7(e.target.value)} class="form-control" id="exampleFormControlSelect1">
                            <option>?</option>
                            <option>Win</option>
                            <option>Loose</option> </select>

                    </div><div className="col-1 justify-content-center text-center">
                        <div >8</div>

                        <select onChange={e => handleSelect8(e.target.value)} class="form-control" id="exampleFormControlSelect1">
                            <option>?</option>
                            <option>Win</option>
                            <option>Loose</option> </select>

                    </div><div className="col-1 justify-content-center text-center">
                        <div >9</div>

                        <select onChange={e => handleSelect9(e.target.value)} class="form-control" id="exampleFormControlSelect1">
                            <option>?</option>
                            <option>Win</option>
                            <option>Loose</option> </select>

                    </div>
                    <div className="col-1 justify-content-center text-center">
                        <div >10</div>

                        <select onChange={e => handleSelect10(e.target.value)} class="form-control" id="exampleFormControlSelect1">
                            <option>?</option>
                            <option>Win</option>
                            <option>Loose</option> </select>

                    </div>
                    
                </div>
<div className="row mt-5">
    <div className="col">
    <table class="table">
  <thead class="thead-dark">
    <tr>
    <th scope="col">1</th>
      <th scope="col">2</th>
      <th scope="col">3</th>
      <th scope="col">4</th>
      <th scope="col">5</th>
      <th scope="col">6</th>
      <th scope="col">7</th>
      <th scope="col">8</th>
      <th scope="col">9</th>
      <th scope="col">10</th>

    </tr>
  </thead>
  <tbody>
  <tr>
      
      <td>{value.charAt(0)}</td>
      <td>{value2.charAt(0)}</td>
      <td>{value3.charAt(0)}</td>
      <td>{value4.charAt(0)}</td>
      <td>{value5.charAt(0)}</td>
      <td>{value6.charAt(0)}</td>
      <td>{value7.charAt(0)}</td>
      <td>{value8.charAt(0)}</td>
      <td>{value9.charAt(0)}</td>
      <td>{value10.charAt(0)}</td>

    </tr>
    
  </tbody>
</table>

 </div>
</div>
            </div>
            <Link to="/">
        <button type="button" class="btn btn-primary">Home</button></Link>
        </>
    )
}

export default First
