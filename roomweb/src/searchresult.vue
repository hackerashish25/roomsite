<template>
  <div>
    <div class="container py-3 mb-1 sticky-top" style="background-color:yellow ">
      <div class="form-row " >
        <div class="col-md-3">
          <label for="validationCustom01">Property Type:</label>
          <select class="form-control" id="exampleFormControlSelect1" v-model="type">
            <option>Private Rooms</option>
            <option>Shared Rooms</option>
            <option>Whole House</option>
          </select>
        </div>
        <div class="col">
          <label for="validationCustom02">Location:</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            placeholder="Location"
            list="places"
            v-model="location" autocomplete="off"
          />
          <datalist id="places" >
            <option v-for="place in availablelocation">{{place}}</option>
          </datalist>
        </div>

        <div class="col-md-3">
          <label for="validationCustom01">For Whom:</label>
          <select class="form-control" id="exampleFormControlSelect2" v-model="ForWhom">
            <option>Boys</option>
            <option>Girls</option>
            <option>Family</option>
          </select>
        </div>

        <div class="col-md-1 d-flex align-content-end">
          <button class="btn btn-block  mt-md-auto mt-4 mybtn"  :disabled="this.location.length==0||this.ForWhom.length==0||this.type.length==0" @click="showresult">Search</button>
        </div>
      </div>
    </div>
    <div class="container mb-2">
      <div class="row">
        <!-- Filter -->
         <div class="col-xl-4 px-xl-0 "   >
          <div class="accordion my-2"  >
            <div class="card"  >
              <div class="card-header bg-primary shadow" >
                <h5 class="mb-0">
                  <button
                    class="btn btn-block btn-link"
                    id="filterToggleButton"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                  >
                    <div class="row d-flex">
                      <div class="col-6 text-left text-light">Filters</div>
                      <div class="col-6 text-right text-light">
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                      </div>
                    </div>
                  </button>
                </h5>
              </div>
              <div id="collapseOne" class="collapse p-2" >
                <div class="accordion mb-2" >
                  <div class="card" >
                    <div class="card-header bg-secondary shadow" >
                      <h5 class="mb-0" >
                        <button
                          class="btn btn-block btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTarget0"
                          aria-expanded="true"
                          
                        >
                          <div class="row d-flex" >
                            <div class="col-6 text-left text-dark" >Price</div>
                            <div class="col-6 text-right text-dark">
                              <i class="fa fa-chevron-down" aria-hidden="true"></i>
                            </div>
                          </div>
                        </button>
                      </h5>
                    </div>
                    <div id="collapseTarget0" class="collapse">
                      <div class="card-body">
                        <div class="form-group row">
                          <div class="col-10">less than 5000</div>
                          <div class="col-2">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="gridCheck1"
                                @click="inp($event)" value="1"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-10">5000 - 10,000</div>
                          <div class="col-2">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="gridCheck2"
                                @click="inp($event)" value="2"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-10">10,000+</div>
                          <div class="col-2">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="gridCheck3"
                                @click="inp($event)" value="3"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion mb-2">
                  <div class="card">
                    <div class="card-header bg-secondary shadow">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-block btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTarget1"
                          aria-expanded="true"
                        >
                          <div class="row d-flex">
                            <div class="col-6 text-left text-dark">Room amenities</div>
                            <div class="col-6 text-right text-dark">
                              <i class="fa fa-chevron-down" aria-hidden="true"></i>
                            </div>
                          </div>
                        </button>
                      </h5>
                    </div>

                    <div id="collapseTarget1" class="collapse show">
                      <div class="card-body">
                        <div class="form-group row" v-for="amenity in RoomAmenities">
                          <div class="col-10"> {{amenity}} </div>
                          <div class="col-2">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="gridCheck1"
                                v-bind:value="amenity"
                                v-model="checkedProducts"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion">
                  <div class="card">
                    <div class="card-header bg-secondary shadow">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-block btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTarget2"
                          aria-expanded="true"
                        >
                          <div class="row d-flex">
                            <div class="col-6 text-left text-dark">Security deposit</div>
                            <div class="col-6 text-right text-dark">
                              <i class="fa fa-chevron-down" aria-hidden="true"></i>
                            </div>
                          </div>
                        </button>
                      </h5>
                    </div>

                    <div id="collapseTarget2" class="collapse show">
                      <div class="card-body">
                        <div class="form-group row" >
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <span class="input-group-text" style="padding:5px; " id="inputGroup-sizing-default">Max Security deposit: </span>
                            </div>
                            <input type="number" step="100" v-model="SecurityDeposit" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
</div>
                        </div>
                      </div>
                    </div>

                    <button type="button" class="btn btn-primary" @click="showresult">filter</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- end Filter -->
        <div class="col pb-3">
          <!-- property card -->
        <div class="card mt-3" style="border-radius: 12px;" v-if="showlist.length!=0" v-bind:key="key" v-for="place in showlist">
            <router-link v-bind:to ="'/detail'+ place.id">
            <div class="row px-3">
              <div class="col-4 p-2 py-2" style="height:100%">
                <img
                  v-bind:src="place.photos[0]"
                  style="width: 100%; object-fit: cover; "
                  class="card-img"
                  alt
                />
              </div>
              <div class="col p--lg-4 p-2 card-height-equal" style="height: 100%;">
                <div class="d-flex align-items-start flex-column">
                  <h5 class="card-title mb-0">{{place.name}}</h5>
                  <p class="card-text mt-0">
                    <small class="text-muted">{{place.location}}</small>
                  </p>

                  <p class="card-text my-auto only-large">{{place.shortDescription}}</p>
                  <div class="row mt-auto w-100">
                    <div class="col-auto">
                      <p class="card-text">
                        <small class="myamenity " v-for="amenity in place.amenities"> {{ amenity}}</small>
                      </p>
                    </div>
                    
                    <div class="col-auto ml-auto text-right pr-0 mr-0">
                      <p class="card-text bottom-align-text text-left">
                        <small class="text-left" style="color:green">min</small>
                        Rs {{place.priceArray[0]}}
                        <small
                          style="color:green"
                        >max</small>
                        Rs {{place.priceArray[1]}}
                        <small>per mon.</small>
                      </p>
                    </div>
                    <div class="col-auto"><p class="card-text text-success">
                        <h5 style="display:flex;flex-direction:column; margin:auto; color: #3a618c" > Security Deposit: <h6 style="margin-top:5px ;margin-left:3px;color: green"> Rs {{ place.securityDeposit}}</h6></h5>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            </router-link>
            <!-- // -->
          </div>
        <div v-show="showlist.length==0">
            <h1>Sorry our service is not available here</h1>
        </div>
          <!-- end property card -->
        </div>
      </div>
    </div>
  </div>
  <!-- end Search page -->
</template> 

<script>
import db from "../firebase";
// import data from '../firebase'
export default {
  data() {
    return {
      availablelocation:[],
      location: "",
      type: "",
      ForWhom: "",
      pricerange:0,
      SecurityDeposit:0,
      placelist: [],
      ListPlace: [],
      checkedProducts: [],
      showlist: [],
      RoomAmenities: [],
      PropertyDetail: ["PowerBackup", "Washing Machine", "Car Parking"]
    };
  },
  methods: {
    inp:function(){
      var optionText = event.target.value;
      this.pricerange = optionText;

    },
    showresult: function() {
      // console.log("hey");
      this.showlist = [];
      this.placelist.forEach(place => {
        if (place.location.toLowerCase() == this.location.toLowerCase() &&
          place.forWhom.toLowerCase() == this.ForWhom.toLowerCase() &&
          place.type.toLowerCase() == this.type.toLowerCase())
         {
          let res = !this.checkedProducts.some(val => place.amenities.indexOf(val) === -1 );

          if(this.SecurityDeposit.toString()!=''&&res==true){
          let value = parseInt(this.SecurityDeposit); 
              if(place.securityDeposit<value){
                  res=false;}
          }
          

          if (res) {
            if(this.pricerange==0)
            this.showlist.push(place);
            else if(this.pricerange==1&&place.priceArray[0]<=5000){
                this.showlist.push(place);
            }
            else if(this.pricerange==2&&place.priceArray[0]>5000&&place.priceArray[0]<10000){
                this.showlist.push(place);
            }
            else if(place.priceArray[0]>10000) {
                this.showlist.push(place);
            }
            }
        }
      });
    }
  },
  created() {
    this.type = this.$route.query.queryObject.type;
    this.location = this.$route.query.queryObject.location;
    this.ForWhom = this.$route.query.queryObject.ForWhom;
  },
  mounted() {
    let list = [];
    db.collection("properties")
      .get()
      .then((res) => {
        res.forEach((doc, ind) => {
          // console.log(doc.id);
          let val = JSON.parse(JSON.stringify(doc.data()));
          if(val.location.toLowerCase() == this.location.toLowerCase()&&val.forWhom.toLowerCase()==this.ForWhom.toLowerCase()&&val.type.toLowerCase()==this.type.toLowerCase()){
            this.showlist.push(val);
          }
          this.placelist.push(val);
        });
      });

    db.collection('locations').doc('list').get().then((res)=>{
     this.availablelocation = res.data().names;
    //  console.log(this.availablelocation)
    })
    db.collection('filters').doc('filters').get().then((res)=>{
     this.RoomAmenities = res.data().amenities;
    //  console.log(this.availablelocation)
    })
    
  }
};
</script>

<style scoped>
.myamenity{
  margin: 5px;
  padding:5px;
  color:blue;
  background-color: yellow;
  border-radius: 30%;

}
.myfil{
  top:150px!important;
}

.bg-secondary{
  background-color:yellow!important ;
}

.card:hover {
  -webkit-box-shadow: -1px 9px 40px -12px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 9px 40px -12px rgba(0,0,0,0.75);
  box-shadow: -1px 9px 40px -12px rgba(0,0,0,0.75);
}
.mybtn {
  border: 1px solid #0066cc!important;
  background-color: #0099cc!important;
  color: #ffffff!important;
}
.mybtn:hover {
  border: 1px solid #0099cc!important;
  background-color: #00aacc!important;
  color: #ffffff!important;
}
.mybtn:disabled,
button[disabled]{
  border: 1px solid #999999!important;
  background-color: #cccccc!important;
  color: #666666!important;

}
a {  text-decoration: none;
}
.sticky {
  position: sticky!important;
  position: -webkit-sticky!important;
}  

</style>
