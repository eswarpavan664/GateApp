/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import image1 from '../../images/worker.png';
import '../about.css';
class  About extends Component {
  render() {
    return (
        <div>


          <section>
                

            <h1 style={{textAlign:'center',color:'blue',fontSize:25,marginTop:'5%',fontWeight:'bold'}}>ABOUT US</h1>
            



                <div className="textdiv">
                    <div className="imagdiv">
                    <img src={image1} className="images"/>
                    <h2>Pavaneswar</h2>
                    </div>

                    <p>This website is developed by pavaneswar and santosh .HTML and CSS can be both used to display align and float images on your website. In this article, we’ll show you how to use HTML to align images to text (or other page elements) and how to use CSS to float images, wrapping text around it as you’d see in a newspaper or magazine. </p>
                </div>

               

                



          </section>



















        </div>
    );
  }
}

export default  About;