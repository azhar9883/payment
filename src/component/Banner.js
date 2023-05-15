import React, { useState } from 'react';
import './banner.css'
import icon from './images/icon.png';
import icon2 from './images/icon2.png';
import vect from './images/vect.png'
import book from './images/book.png'
import watch from './images/watch.png'
import tv from './images/tv.png'
import noal from './images/noal.png'
import degree from './images/degree.png'
import razor from './images/razor.png'
const Banner = () => {
  const [state, setState] = useState(99)

  const getdata = () => {
    const newColor = state + 179
    setState(newColor);

  }
  const fun = () => {
    const newGet = state + 149;
    setState(newGet);

  }
  const Increase = () => {
    const newData = state + 99;
    setState(newData);

  }

  const conceal = () => {

    if (state > 0) {
      setState(state - 99);
    } else {
      const value = 0
      setState(value)
    }
  }

   // CLICK ON OFFER WILL UPDATE AND CANCEAL BUTTON WILL DISCOUNT THE PRICE



  return (
    <div className='back '>
      <div className='container '>
        <div className='d-flex  justify-content-between count '>
          <div className='col-md-6 py-2 '>
            <h3 className='text-white py-5'>Access curated courses worth <br />
              &#8377; <span className='hr-line'>18,500</span> at just <span className='text-primary'>&#8377;99 </span>per year!
            </h3>
            <div className='d-flex justify-content-start '>
              <div>
                <img src={book} alt='img' width='50%' className='text-white'></img>
              </div>
              <div className='py-3 me-5'>
                <h5 className='text-white text-center me-5'><span className='text-primary'>100 +</span>  job relavent courses</h5>
              </div>
            </div>
            <div className='d-flex justify-content-start '>
              <div className='py-2'>
                <img src={watch} alt='img' width='50%' className='text-white'></img>
              </div>
              <div className='py-2 me-5'>
                <h5 className='text-white text-center me-5'><span className='text-primary'>20,000 +</span> Houre of content</h5>
              </div>
            </div>
            <div className='d-flex justify-content-start py-3'>
              <div>
                <img src={tv} alt='img' width='50%' className='text-white'></img>
              </div>
              <div className='py-2 me-5'>
                <h5 className='text-white text-center me-5'><span className='text-primary'> Exclusive </span>  Webiner target</h5>
              </div>
            </div>
            <div className='d-flex justify-content-start py-3'>

              <div>

                <img src={degree} alt='img' width='50%' className='text-white'></img>
              </div>
              <div>
                <h5 className='text-white text-center me-5'> ScholarShip Worth<span className='text-primary'>  &#8377;94,500 </span>  </h5>
              </div>
            </div>
            <div className='d-flex justify-content-start py-2'>
              <div>
                <img src={noal} alt='img' width='50%' className='text-white'></img>
              </div>
              <div>
                <h5 className='text-white text-center me-5'><span className='text-primary'> Add Free </span>  Learning Exprience </h5>
              </div>
            </div>




          </div>
          <div className='col-md-5'>
            <div class="card">
              <div className='d-flex justify-content-around'>
                <div className='text-center'>
                  <img src={icon} alt='img' width='50%'></img>
                  <p className=''>sign Up</p>
                </div>
                <div className='text-center'>
                  <img src={icon2} alt='img' width='45%'></img>
                  <p className=''>Subscribe</p>
                </div>
              </div>
              <div className="title  plann">Select Your Subscription plan</div>
              <div class="content">
                <input type="radio" name="rd" id="one" />
                <input type="radio" name="rd" id="two" />
                <input type="radio" name="rd" id="three" />
                <input type="radio" name="rd" id="four" />
                <input type="radio" name="rd" id="five" />
                <label for="one" class="box first boxx py-2">
                  <button type='button ' className='butt text-center border-0 text-white'>offer expired</button>
                  <div class="plan">
                    <span class="circle"></span>
                    <span class="yearly">12 Months Subscription</span>
                  </div>
                  Total  <span class="price fw-bold">&#8377;179  &#8377;8/mo </span>
                </label>
                <label for="two" class="box second py-2">
                  <button type='button ' className='buttt text-center border-0 text-white'>Recommended</button>
                  <div class="plan" onClick={getdata}>
                    <span class="circle"></span>
                    <span class="yearly">12 Months Subscription</span>
                  </div>
                  Total <span class="price fw-bold" >&#8377;179  &#8377;15/mo </span>
                </label>
                <label for="three" class="box third">
                  <div class="plan" onClick={fun}>
                    <span class="circle"></span>
                    <span class="yearly">6 Months Subscription</span>
                  </div>
                  Total<span class="price fw-bold"> &#8377;149  &#8377;25/mo</span>
                </label>
                <label for="four" class="box four">
                  <div class="plan" onClick={Increase}>
                    <span class="circle"></span>
                    <span class="yearly">3 Months Subscription</span>
                  </div>
                  Total<span class="price fw-bold"> &#8377;99  &#8377;33/mo</span>
                </label>
                <hr className='secondry'></hr>
                <div className='d-flex justify-content-between'>
                  <div className=''>
                    <span className="   yearly"> Subscription free</span>
                  </div>
                  <div className=''>
                    <span className="  price"> &#8377;18,500  </span>
                  </div>
                </div>


                <label for="five" className="box five py-4 btn-outline">

                  <span className='limit '>limite time offer</span> <span className='rupee'>-&#8377; 18,1400</span>
                  <img src={vect} className='me-2 mt-2 ' alt='img' width='6%'></img><span className='text-danger mt-2 offer '> offer valid till 23 March 2023</span>

                </label>
              </div>
              <div className='d-flex justify-content-between py-1'>
                <div className=''>
                  <span className="   yearly">Total (Incl.of 18% GST)</span>
                </div>
                <div className=''>
                  <span className=" fw-bold price">&#8377;{state}</span>
                </div>
              </div>
              <div className='  d-flex  justify-content-around py-1'>
                <div className='text-center'>
                  <button className='btn btn-outline-danger  px-5 ' onClick={conceal}>CONCEAL</button>
                </div>
                <div className='text-center'>
                  <button className='btn btn-success px-4 proceed '>PROCEED TO PAY</button>

                </div>


              </div>
              <div className='mx-3 mt-2'>
                <img src={razor} alt='raz' width='30%'></img>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Banner
