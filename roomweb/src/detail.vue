<template>
<div>
    <div class="container">
            <div class="row">
                <div class="col-xl-8 col-12 px-lg-4 py-lg-4 p-1">
                    
                    <!-- property detail card -->

                    <!-- image carousel -->
                    <div id="carouselExampleControls" class="carousel slide p-3" data-ride="carousel" style="width: 100%; height:400px; max-height: 55vw; object-fit: cover;">
                        <div class="carousel-inner w-100 h-100">
                            <div class="carousel-item" v-bind:class="{active:index===1}" v-for="(photo,index) in photos" style=" text-align: center;">
                            <img class="d-block w-100" v-bind:src="photo"  alt="First slide">
                            </div>
                             <!-- <div class="carousel-item">
                            <img class="d-block w-100" v-bind:src="photos[1]" alt="Second slide">
                            </div> -->
                            <!--
                            <div class="carousel-item">
                            <img class="d-block w-100" src="assets/bg2.jpg" alt="Third slide">
                            </div> -->
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <!-- end image carousel -->

                    <div class="container">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h3 style="display:inline;">{{property.name}}</h3>
                                        <img :src="'../img/'+property.forWhom+'.png'" alt="" style="width:20%;dislay:float;float:right">
                                        <h6 class="card-subtitle mb-xl-3 mb-2 text-muted">{{property.location}}</h6>
                                        <span style="font-size:2.0rem;color:red">About the Property</span>

                                        <p class="card-text" style="font-size:20px">{{property.shortDescription}}</p>
                                        <hr>
                                        
                                        <!-- <div v-for="(val,key,index) in property.rentDetails">
                                            <h5>{{key}}</h5>
                                            <p v-for="details in rentDetails[index] ">{{details}}</p>
                                        </div> -->
                                       
                                     <div style="display:flex;flex-direction:row;  justify-content: center;">
                                     
                                     <div style="display:flex;flex-direction:column; margin-right:auto;margin-left:8px;">
                                     <div style="display:flex;flex-direction:column;">
                                      <div style="display:flex;flex-direction:row;justify-content:space-evenly">  
                                     <img src="./assets/rupees.png" style="width:5%;"><span class="text-success">Monthly Rent: </span> 
                                     </div>
                                     <p style="margin-left:auto" v-show="property.type!='Shared Rooms'">₹{{property.priceArray[0]}}</p> 
                                      <!-- ////       -->
                                        <table class="table table-striped" style="margin-left:5px">
                                          <thead>
                                            <tr>
                                              <th scope="col">#</th>
                                              <th scope="col" v-for="(val,key) in property.rentDetails">{{key}}</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <th scope="row" class='text-info'>Security Deposit</th>
                                              <td v-for="(val,key) in property.rentDetails">{{val[0]}}</td>
                                              
                                            </tr>
                                            <tr>
                                              <th scope="row" class='text-success'>Rent</th>
                                              <td v-for="(val,key) in property.rentDetails">{{val[1]}}</td>
                                              
                                            </tr>
                                            
                                          </tbody>
                                        </table>
                                      <!-- ////     -->
                                     </div>
                                     <div style="display:flex;flex-direction:row;"> 
                                     <span class="text-info" style="margin-right:10px" v-show="property.type!='Shared Rooms'">Security Deposit: </span>
                                     <p style="margin-left:auto" v-show="property.type!='Shared Rooms'"> ₹{{property.securityDeposit}}</p>  
                                    
                                     </div>
                                      <p class='text-danger'>(Fully refundable after the property is vaccated in original condition)</p>
                                     </div>  
                                     </div>  
                                     <hr>
                                    <div>
                                      <span style="font-size:2.0rem;color:red">House Features</span>
                                      <div style = "display:flex;flex-direction:row;flex-wrap: wrap;">
                                      <div style = "flex-basis:33%; margin-bottom:20px" v-for="(val,key) in property.HouseFeature" v-show="val!=0">
                                      <img :src="'./img/'+key+'.png'" v-bind:alt="key" style="width:10%">    
                                      <p style="display:inline" v-show="val!=0"> {{val}} {{key}}</p>
                                      </div>     
                                      </div>     
                                    </div>
                                      <hr>
                                    <div>
                                      <span style="font-size:2.0rem;color:red">Amenities</span>
                                      <div style = "display:flex;flex-direction:row;flex-wrap: wrap;">
                                      <div style = "flex-basis:50%; margin-bottom:20px" v-for="amenity in property.amenities">
                                      <img :src="'./img/'+amenity+'.png'" v-bind:alt="key" style="width:10%">    
                                      <p style="display:inline" > {{amenity}} </p>
                                      </div>     
                                      </div> 

                                    </div>
                                     <hr>
                                     <div v-for="(val,key) in property.OtherCharges">
                                      <p style="font-weight:bold">{{key}} : {{val[0]}}</p>
                                      <p>{{val[1]}}</p>
                                      </div> 

                                      <div>
                                      <span style="font-size:2.0rem;color:red">Nearby</span>
                                      <div style = "display:flex;flex-direction:row;flex-wrap: wrap;">
                                      <div style = "flex-basis:33%; margin-bottom:20px" v-for="(val,key) in property.Nearby" v-show="val!=0">
                                      <img :src="'./img/'+key+'.png'" v-bind:alt="key" style="width:10%">    
                                      <p style="display:inline" v-show="val!=0"> {{val}} {{key}}</p>
                                      </div>     
                                      </div>     
                                    </div>
                                    <hr>
                                    <div>
                                      <div class="row">
                                      <div class="col">
                                       <p v-for="(val,key) in property.NearPlaces" style="font-weight:bold">{{key}} : <span style="font-weight:normal">{{val}}</span></p>
                                        
                                      </div>
                                      <div class="col">
                                      <img src="../img/kmstone.png" alt="" style="width:20%">
                                      </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="display-8">Terms of stay</h5>
                                       
                                        <p class="card-text">
                                          <svg class="bi bi-bootstrap-reboot" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M1.161 8a6.84 6.84 0 106.842-6.84.58.58 0 010-1.16 8 8 0 11-6.556 3.412l-.663-.577a.58.58 0 01.227-.997l2.52-.69a.58.58 0 01.728.633l-.332 2.592a.58.58 0 01-.956.364l-.643-.56A6.812 6.812 0 001.16 8zm5.48-.079V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6zm0 3.75V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141z" clip-rule="evenodd"/>
                                      </svg>
                                        <span>Rules</span>    
                                        <ul>
                                        <li class="list-group-item list-group-item-danger"  style="margin:2px" v-for="rule in property.rules"  >{{rule}}
                                        </li>   
                                        </ul>
                                        <svg class="bi bi-bookmarks-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M2 4a2 2 0 012-2h6a2 2 0 012 2v12l-5-3-5 3V4z" clip-rule="evenodd"/>
                                        <path d="M14 14l-1-.6V2a1 1 0 00-1-1H4.268A2 2 0 016 0h6a2 2 0 012 2v12z"/>
                                      </svg>
                                        <span>Responsibility</span>    
                                        <ul>
                                        <li class="list-group-item list-group-item-success" style="margin:2px" v-for="res in property.responsibility"  >{{res}}
                                        </li>   
                                        </ul>
                                        </p>
                                        <span style="font-weight:bold">More about Property</span>
                                        <p> {{property.description}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end property detail card -->          
                </div>

                <!-- visit form -->
                <div class="col-xl-4 col-12  px-lg-4 py-lg-4 p-1 ">
                    <div class="card  px-lg-4 py-lg-4 m-2 p-2 text-center sticky-top">
                        <h4>Book a visit!</h4>
                        <hr>

                        <form>
                            <div id="collapseTarget1" class="collapse show">
                                <div class="form-group">
                                    <label for="nameInput">Full Name</label>
                                    <input type="text" class="form-control" id="nameInput" v-model="form.name" >
                                </div>
                                <div class="form-group">
                                    <label for="numberInput">Phone number</label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">+91</div>
                                        </div>
                                        <input type="text" class="form-control"  id="numberInput" v-model="form.phone">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="nameInput"> Visit Date </label>
                                    <input type="date" class="form-control" id="dataInput" v-model="form.date" >
                                </div>
                                <button type="button" class="btn btn-block btn-secondary" @click="sendOTP()">Send OTP</button>
                               
                                
                                <hr>
                                <small>Or call +91-9711999999</small>
                            </div>
                            
                        </form>
                    </div>
                    
                </div>
                <!-- end visit form -->
            </div>
        </div>
        <!-- end detail page -->
        <!-- Footer starts -->
        
        <footer id="footer" class="footer-1 pt-3 bg-secondary">
                <div class="main-footer widgets-dark typo-light">
                  <div class="container">
                    <div class="row">
              
                      <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="widget subscribe no-box">
                          <h5 class="widget-title">Roomlelo is fun!<span></span></h5>
                          <p>Student accomodation was never this easy</p>
                        </div>
                      </div>
              
                      <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="widget no-box">
                          <h5 class="widget-title">Quick Links<span></span></h5>
                          <ul class="thumbnail-widget">
                            <li>
                              <div class="thumb-content"><a href="/">Home</a></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="widget no-box">
                          <h5 class="widget-title">Get Started<span></span></h5>
                          <p>Find yourself accomodation today.</p>
                        </div>
                      </div>
            
                      <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="widget no-box">
                          <h5 class="widget-title">Contact Us<span></span></h5>
                          <p>rooomlelo@gmail.com</p>
                          <ul class="social-footer2">
                            <h6>
                              <li class="fa fa-phone"> +91 7667651878 </li>
                            </h6>
                            <h6>
                              <li class="fa fa-phone"> +91 7349666240 </li>
                            </h6>
                          </ul>
                        </div>
                      </div>
              
                    </div>
                  </div>
                </div>
              <hr>
                <div class="footer-copyright">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12 text-center">
                        <p>Copyright Roomlelo © 2020. All rights reserved.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
        <!-- Footer ends -->
        

</div>
</template>

<script>
import db from '../firebase'
import firebase from 'firebase'

export default {
    
  data () {
    return {
      id:this.$route.params.id,
      property:{},
      photos:[],
      rentDetails:[],
      phone:'',
      form:{},
      recaptchaVerifier: {},
      confirmationResult:{},
    }
  },

   methods: {
    inp: function(){
        console.log(this.property);
        console.log(this.rentDetails);
    },
    sendOTP: function(){
      console.log(this.form.phone);
        if(this.form.phone.length != 10&&this.form.name.length==0){
                alert("detail filled are not correct");
                return '';
            }
            let phoneNumber = "+91"+this.form.phone;
            console.log(phoneNumber);
            let queryObject = this.form;
            this.$router.push({name:'OTPBox',query:{queryObject}});        
    },

   },
   created(){
    db.collection("properties")
      .get()
      .then((res) => {
        res.forEach((doc, ind) => {
          if(this.id===doc.id)
          {this.property = doc.data();
          }
        });
      }); 
    db.collection('properties').doc(this.id).get().then((res)=>{
        this.photos = res.data().photos;
        let objKeys = Object.keys(res.data().rentDetails); 
            objKeys.forEach(key => { 
                let value = res.data().rentDetails[key]; 
                this.rentDetails.push(value); 
            });

            
    })  
   },
   mounted(){

   },
    
}
</script>

<style scoped>
.btn-secondary{
  background-color:yellow!important ;
  color:blue!important
}
.bg-secondary{
  background-color:yellow!important ;
  /* color:blue!important */
}
</style>
