<template>
  <div id="wrapper" style="margin-top: 70px;">
      <div class="container" style="margin-right: 0px;padding: 0px; margin-top: 10px; margin-bottom: 130px;">
                  <div id="carouselExampleSlidesOnly" class="carousel slide " data-ride="carousel">
                      <div class="carousel-inner my-lg-4 py-lg-4">
                          <div class="carousel-item active" id="image-div">
                          <img id="back-img" src="src/assets/back.png" alt="First slide" style="float: right; width: 50vw;">
                          </div>
                      </div>
                  </div>
          </div>

          <div id="heading" style="position: absolute; top:30%;left:6%;">
            <h4 id="h4-1" style="font-family: Bahnschrift;">Search, Select</h4>
              <h4 id="h4-2" style="font-family: Bahnschrift;">And Shift To Your</h4>
              <h1 id="h1-1" style="font-family: Bahnschrift; font-size: 55px; color: rgb(0,191,255); font-weight:600;">Perfect Home</h1>
              <p id="p-1" style="font-family: Bahnschrift; font-size: 18px;color: dimgrey; font-weight: 300;">A perfect solution for the home seeker where we provide <br> room on rent at lowest possible cost. </p>
              <button id="btn-explore" type="button" style="font-family: Bahnschrift;background-color: rgba(0,191,255,0.8);color:white; outline: 0;border:0; width: 100px;height: 40px;border-radius:20px;" onclick="doScrolling('#properties',2000)">Explore</button> 
          </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title:"my vue file"
    }
  },
   mounted(){
    document.getElementById('home').classList.add('active');
    document.getElementById('home').style.color = 'white';
    document.getElementById('search-link').style.color = 'blue';
    document.getElementById('portal-btn').style.backgroundColor = 'white';
    document.getElementById('portal-btn').style.color = 'blue';
  }
  
}
</script>

<style scoped>
#btn-explore:active{
  transition:all ease 0.2s;
  transform:scale(0.9);
}
</style>