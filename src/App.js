import React from 'react';
import './App.css';
import ReactLogo from './images/image intern1.png';
import image4 from './images/IMAGE (4).png';
import image8 from './images/IMAGE (8).png';
import image3 from './images/IMAGE (3).png';
import image1 from './images/IMAGE (1).png';
import search from './images/IMAGE.png';
import image9 from './images/IMAGE (9).png';
import vector from './images/Vector.png';
import image6 from './images/IMAGE (6).png';
import image7 from './images/IMAGE (7).png'






const App = () => {
  return (
    <div>
      {/* 
  header
      */}
      <div id="n1">
        <div id='search'>
          <img src={search} style={{width:'20px',height:'20px',padding:'2px'}}/>


          
        </div>

        <div>Categories</div>
        <div>Website Builders</div>
        <div>Todays deals</div>
      </div>



      {/* 
  parent element
      */}
      <div id="n2">

        {/* 
  section1
      */}

        <div id='n3' >
          <h1 id='heading'>Best Website Builders in the US</h1>
          <hr></hr>
          <div id='n4'>
            <p><span style={{width:'10px',height:'10px',borderRadius:'50%',padding:'2px',marginRight:'10px', marginLeft:'5px' ,border:'2px solid black'}}>✓</span>Last Updated-February22,2020</p>
            <div style={{display:'flex',gap:'1px'}}>
              <img src={image9} style={{width:'15px',height:'20px',marginTop:'18px'}}/>
            <p>Advertising Disclosure</p>
            </div>
           

            <div style={{display:'flex',marginLeft:'400px'}}>
         <p id='n5' style={{}}>Top relevant</p>

            <img src={image1} style={{width:'30px',height:'10px',marginTop:'25px'}}/>

          </div>
        

          
          </div>

          <hr></hr>
        </div>
        


        {/* 
  section2
      */}
        <div id='n6'>
          <p>Tools</p>
          <p>Aws Builder</p>
          <p>Start Build</p>
          <p>Build Supplies</p>
          <p>Tooling</p>
          <p>Blue Hosting</p>
        </div>
        <div id='n7'>
          <p>Home</p>
          <img src={vector} id='vector'/>
          <p> Hosting for all</p>
          <img src={vector} id='vector'/>
          <p>Hosting6</p>
          <img src={vector} id='vector'/>
          <p>Hosting5</p>
        </div>


        {/* 
  section3-bigger elements
      */}
      <div style={{width:'1000px'}}>

<div id='final'>
          <div>
          <img src={image6} style={{width:'20px',height:'20px',marginLeft:'10px'}}/>
          </div>
    
    <p style={{fontSize:'15px'}}>Best Choice</p>
  </div>
  </div>


        <div id='n8'>

          <div id='serial'>1</div>
        

          <div id='k1'>
            <img src={ReactLogo} height="100" id='img1'/>
            <p style={{ marginLeft: '50px' }}>Builder1</p>
          </div>

          <div className='d1'>
            <p><span>Wixpro 72-inch Responsive Website Builder</span>-Comprehensive platform creative digital tool,streamlined designed interface for<br></br> professional
              websites and online stores(Black/Blue)<br></br><span>Main highlights</span></p>
            <p className='d2'>[What you Get]:Recieve The WixPro Builder Suite,<br></br>access to premium design Templates,an extensive Library of<br></br> Widget and apps,and detailed step-by-step guides.</p>
            <p style={{ color: 'blue' }}> show more</p>
          </div>

          <div id='j2'>
            <div id='j1'>
              <h1>9.8</h1>
              
             
              <p>Exceptional</p>
              <img src={image8} id='image4'/>
              
            </div>
            <button id='button1'>View</button>
          </div>

        </div>



        <div style={{width:'1000px'}}>

<div id='final'>
          <div>
          <img src={image7} style={{width:'20px',height:'20px',marginLeft:'5px'}}/>
          </div>
    
    <p style={{fontSize:'15px'}}>Best Value</p>
  </div>
  </div>






        <div id='n8'>
        <div id='serial'>2</div>

          <div id='k1'>
            <img src={ReactLogo} height="100" id='img1'/>
            <p style={{ marginLeft: '50px' }}>Builder</p>
          </div>

          <div className='d1'>
            <p><span>SiteCraft 68-inch Ultimate web design studio</span>-Advanced site Creation Toolkit , intuitive Drag-and-Drop Editor For Dynamic <br></br>websites and
              E-Commerce platform(Green/White)<br></br><span>Main highlights</span></p>
            <p className='d2'>[What you Get]:Gain access to the SiteCraft design studio,<br></br>featuring a robust section of design of elements,SEO <br></br>optimization Tools,and E-commerce integrations.</p>
            <p style={{ color: 'blue' }}> show more</p>
          </div>

          <div id='j2'>
            <div id='j1'>
              <h1>9.5</h1>
              <p>Excellent</p>
              <img src={image4} id='image4'/>
            </div>
            <button id='button1'>View</button>
          </div>

        </div>


        <div id='n8' style={{marginTop:'40px',marginBottom:'20px'}}>
        <div id='serial'>3</div>

          <div id='k1'>
            <img src={ReactLogo} height="100" id='img1'/>
            <p style={{ marginLeft: '50px' }}>Builder1</p>
          </div>

          <div className='d1'>
            <p><span>Wixpro 72-inch Responsive Website Builder</span>-Comprehensive platform creative digital tool,streamlined designed interface for<br></br> professional
              websites and online stores(Black/Blue)<br></br><span>Main highlights</span></p>
            <p className='d2'>[What you Get]:Recieve The WixPro Builder Suite,<br></br>access to premium design Templates,an extensive Library of<br></br> Widget and apps,and detailed step-by-step guides.</p>
            <p style={{ color: 'blue' }}> show more</p>
          </div>

          <div id='j2'>
            <div id='j1'>
              <h1>9.3</h1>
              <p>Exceptional</p>
              <img src={image8} id='image4'/>
            </div>
            <button id='button1'>View</button>
          </div>

        </div>


        <div id='n9' >
        <div id='serial' >4</div>

          <div id='k1'>
            <img src={ReactLogo} height="100" />
            <p style={{ marginLeft: '50px' }}>CDK</p>
          </div>

          <div className='d1'>
            <p><span>Cdk Responsive Builder:</span>An extensive library of widgets and apps and detailed step-by-step guides<br></br><span style={{width:'120px',height:'20px',backgroundColor:'#f2f4f7',fontWeight:'10px',fontSize:'15px',color:'#376b9d',borderRadius:'5px',padding:'3px',marginTop:'10px'}}>26% Off</span><br></br><span>Main highlights</span></p>
                 
               <div style={{width:'505px',height:'116px',backgroundColor:'#fff4ed',borderRadius:'10px'}}>
                <div style={{marginTop:'10px'}}>
                
                <p><span style={{width:'100px', height:'20ox', color:'blue', backgroundColor:'white',margin:'10px',padding:'8px'}}>9.9</span> Building Responsive</p>
                <p><span style={{width:'100px', height:'20ox', color:'blue', backgroundColor:'white',margin:'10px',padding:'8px'}}>9.9</span> Cool</p>

                <p><span style={{width:'100px', height:'20ox', color:'blue', backgroundColor:'white',margin:'10px',padding:'8px',marginTop:'5px'}}>9.9</span> Docs</p>

                </div>
           </div> 

           <div style={{fontSize:'15px'}}>

                     <p>Why We Love It</p> 
           <p><span style={{width:'30px',height:'30px',borderRadius:'50%',padding:'2px',marginRight:'10px',backgroundColor:'#ebf5ff',color:'#0956a2'}}>✓</span>Documentation</p>
           
           
           <p><span style={{width:'30px',height:'30px',borderRadius:'50%',padding:'2px',marginRight:'10px',backgroundColor:'#ebf5ff',color:'#0956a2'}}>✓</span>Easy use</p>
           <p><span style={{width:'30px',height:'30px',borderRadius:'50%',backgroundColor:'#ebf5ff',color:'#0956a2',padding:'2px',marginRight:'10px'}}>✓</span>Out of Box</p>
           </div>
           
                 
                  <p style={{ color: 'blue' }}> show more</p>
          </div>

          <div id='j2'>
            <div id='j1' style={{marginLeft:'70px'}}>
              <h1>9.1</h1>
              <p>Very Good</p>
              <img src={image3} id='image4'/>
            </div>
            <button id='button1' style={{marginTop:'230px',marginLeft:'40px'}}>View</button>
          </div>

        </div>


        {/*card section*/}

  <div>
  <h2>Related Deals You must like for</h2>
 
  <div style={{display:'flex'}}>
  <div className='d3'>
    <img src={ReactLogo} id='card1'/>

    <div>
    <span style={{width:'120px',height:'20px',backgroundColor:'#f2f4f7',fontWeight:'10px',fontSize:'15px',
    color:'#376b9d',borderRadius:'5px',padding:'3px',marginTop:'10px',marginLeft:'10px'}}>26% Off</span>
    <span style={{width:'120px',height:'20px',backgroundColor:'#f2f4f7',fontWeight:'10px',fontSize:'15px',
    color:'#376b9d',borderRadius:'5px',padding:'3px',marginTop:'10px' ,marginLeft:'10px'}}>Limited Time</span>
  </div>

<h3>Web Builder1</h3>
<p style={{marginLeft:'10px'}}>Comuter Modern Classic with wix<br></br>support</p>
<span style={{marginLeft:'10px',fontSize:'20px',fontWeight:'2px',color:'#707a85',marginRight:'5px'}}>$39.96</span><span style={{color:'#b2bac2',marginRight:'5px'}}>$49.96</span> <span style={{color:'#f58c97'}}>(20% Off)</span>

<button id='cardbutton'>view Deal</button>


  </div>





  <div className='d3'>
    <img src={ReactLogo} id='card1'/>

    <div>
    <span style={{width:'120px',height:'20px',backgroundColor:'#f2f4f7',fontWeight:'10px',fontSize:'15px',
    color:'#376b9d',borderRadius:'5px',padding:'3px',marginTop:'10px',marginLeft:'10px'}}>26% Off</span>
    <span style={{width:'120px',height:'20px',backgroundColor:'#f2f4f7',fontWeight:'10px',fontSize:'15px',
    color:'#376b9d',borderRadius:'5px',padding:'3px',marginTop:'10px' ,marginLeft:'10px'}}>Limited Time</span>
  </div>

<h3>Web Builder1</h3>
<p style={{marginLeft:'10px'}}>Comuter Modern Classic with wix<br></br>support</p>
<span style={{marginLeft:'10px',fontSize:'20px',fontWeight:'2px',color:'#707a85',marginRight:'5px'}}>$39.96</span><span style={{color:'#b2bac2',marginRight:'5px'}}>$49.96</span> <span style={{color:'#f58c97'}}>(20% Off)</span>

<button id='cardbutton'>view Deal</button>


  </div>



  <div className='d3'>
    <img src={ReactLogo} id='card1'/>

    <div>
    <span style={{width:'120px',height:'20px',backgroundColor:'#f2f4f7',fontWeight:'10px',fontSize:'15px',
    color:'#376b9d',borderRadius:'5px',padding:'3px',marginTop:'10px',marginLeft:'10px'}}>26% Off</span>
    <span style={{width:'120px',height:'20px',backgroundColor:'#f2f4f7',fontWeight:'10px',fontSize:'15px',
    color:'#376b9d',borderRadius:'5px',padding:'3px',marginTop:'10px' ,marginLeft:'10px'}}>Limited Time</span>
  </div>

<h3>Web Builder1</h3>
<p style={{marginLeft:'10px'}}>Comuter Modern Classic with wix<br></br>support</p>
<span style={{marginLeft:'10px',fontSize:'20px',fontWeight:'2px',color:'#707a85',marginRight:'5px'}}>$39.96</span><span style={{color:'#b2bac2',marginRight:'5px'}}>$49.96</span> <span style={{color:'#f58c97'}}>(20% Off)</span>

<button id='cardbutton'>view Deal</button>


  </div>








</div>
  
</div>

{/*section small*/}
<div style={{width:'1024px',height:'171px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
  <h1 style={{color:'#5c6874',marginLeft:'10px'}}>Sign up and get exclusive<br></br>Special deals</h1>
  <button style={{width:'100px',height:'40px',borderRadius: '5px',
  backgroundColor: '#1b88f4',color: 'white'}}>Signup</button>
</div>



{/*footer*/}

<div id='footer'>
  <div style={{marginLeft:'250px'}}>
    <h4>CATEGORIES</h4>
    <p>Web Builder</p>
    <p>Hosting</p>
    <p>Data center</p>
    <p>Robotic-Automation</p>
  </div>


  <div>
    <h4>CONTACT</h4>
    <p>contact</p>
    <p>privacy policy</p>
    <p>Terms of service</p>
    <p>Categories</p>
    <p>About</p>
  </div>

  <div style={{marginTop:'130px',display:'flex',gap:'10px'}}>
    united states
    <div  style={{width:'30px',height:'30px', color:'white',marginTop:'5px'}}>
    <img src={image1} style={{width:'20px',height:'20px',}}/>
    </div>
   
  </div>
</div>



        
      
        






































      </div>
    </div>
  )
}
export default App;