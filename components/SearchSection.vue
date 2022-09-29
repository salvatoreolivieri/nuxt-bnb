<template>
  <section id="ricerca" class="background-color">
    <div class="custom-container text-center">

      <h2>Cerca appartamento</h2>

      <!-- Città -->
      <div class="row d-flex flex-column">
          <div class="col">

              <div class="d-flex justify-content-center mt-4 search-app">
                  <form action="">

                      <div class="destination">
                          <!-- <label class="text-center" >Inserisci la tua destinazione</label> -->
                          <input placeholder="Inserisci la tua destinazione" class="input-city text-center" type="text"  >
                      </div>

                  </form>
              </div>

          </div>
      </div>

      <!-- check-in e check-out -->
      <div class="row d-flex flex-column">
          <div class="col">

              <div class="d-flex justify-content-center mt-4 search-app">
                  <form action="">

                      <div class="destination">
                          <input placeholder="Check-in" class="input-city text-center" type="text"  >
                      </div>

                      <div class="destination">
                        <input placeholder="Check-out" class="input-city text-center" type="text"  >
                      </div>

                  </form>
              </div>

          </div>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>

.custom-container{
  padding: 50px 0;
}


  // GENERAL PRESETS

  h1{
      font-size: 48px;
      margin-top: 20px;
      color: #FFFFFF;
  }

  label {
      margin: 0;
      color: #979797;
  }


  .container-fluid {
      position: relative;
  }

  .col-6 {
      padding: 0px 10px;
  }

  .bnb {
      animation: color-change 4s infinite
  }




  // RECOMMENDED POSITION
  .pos-recommended {
      position: absolute;
      top: 165px;
      right: 167px;
  }
  .container-recommended {
      border: 1px solid #dee2e6;
      border-radius: 20px;
      width: 313px;
      z-index: 999;
      background-color: #FFFFFF;


      li {
          font-size: 15px;

          &:hover {
              color: #000000;
          }
      }
  }

  // /RECOMMENDED POSITION


  // SEARCH APP

  .search-app form {
      border: 1px solid #dee2e6;
      padding: 15px 0;
      border-radius: 35px;
      background-color: #FFFFFF;
  }

  input,
  label {
    border-radius: 50px;
  }

  .search-app input{
      padding: 0px 10px;
      width: 330px;
      border: none;

      &:focus {
          outline: none;
      }
  }



  .destination, .rooms, .beds, .distance  {
      display: flex;
      flex-direction: column;
      align-content: center;
      flex-wrap: wrap;
  }

  form .input-city, form .input-numb, form .input-km {
      margin: auto;
  }

  .destination, .rooms, .beds {
      align-content: center;
  }

  form .input-numb {
      width: 95px;
      text-align: center;

  }

  form .input-km {
      width: 130px;
      text-align: center;
      margin: 0px 10px;
  }

  // /SEARCH APP


  // CHECKBOX AREA

  ul {
      padding: 0;
      margin: 0px 10px;
  }

  li {
      text-align: center;
      text-decoration: none;
      text-transform: none;
      color: #979797;
      transition: color .2s ease-in-out;
      font-size: 18px;
      border-bottom: 2px solid transparent;
      cursor: pointer;

      &:hover {
          transition: color .2s ease-in-out;
          text-decoration: none;
          -webkit-transition: color .2s ease-in-out;
          -moz-transition: color .2s ease-in-out;
          color: #9DC2F6;
      }
  }

  p {
      margin-bottom: 2px;
      // font-weight: 600;
  }

  input[type=checkbox] {
      transform: scale(1.5);
  }

  .card-service {
      width: 110px;
  }

  .checkbox-area{
      padding-bottom: 60px;
  }

  .checkbox{
      width: 50%;
      margin: 0 auto;
      margin-top: 40px;
      margin-bottom: 10px;
  }

  .checkbox, form, .search {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
  }

  .service-list-2 {
      justify-content: space-between;
  }

  .selected {
      color: #9DC2F6;
      transition: .2s ease-in-out;
      // border-bottom: 2px solid #525252
  }

  .no-selected {
      color: #FFFFFF;
  }

  // /CHECKBOX AREA


  // MEDIA QUERY

  @media screen and (max-width: 1681px) {
      .service-list-1 li {
          margin: 0 4px;
      }
  }

  @media screen and (max-width: 1486px) {
      .card-service {
          width: 108px;
      }
  }



  @media screen and (max-width: 757px) {
      .checkbox{
          width: 80%;
          margin: 0 auto;
          margin-top: 40px;
          margin-bottom: 10px;
      }

      .card-service {
          width: 136px;
      }

      .destination {
          text-align: center;
          border-right: none;
      }

      .rooms, .beds, .distance {
          width: 33%;
      }

      .pos-recommended {
          top: 214px;
          right: 0px;
      }

      .container-recommended {
          width: 90%;
      }

      form .input-km {
          width: 70%;
      }
  }

  @media screen and (max-width: 646px) {
      .destination {
          border-right: none;
      }

      .container-recommended {
          width: 80%;
      }

  }

  @media screen and (max-width: 550px) {
      h1 {
          margin: 0px 45px;
      }

      .pos-recommended {
          top: 263px;
      }
  }

  @media screen and (max-width: 505px) {
      .pos-recommended {
          top: 263px;
      }

      .container-recommended {
          width: 85%;
      }

      h1 {
          margin: 0 40px;
      }
  }


  @media screen and (max-width: 465px){
      form .input-city {
          border-right: none;
      }
  }

  @media screen and (max-width: 455px){
      .destination, .beds, .distance {
          border-right: none;
          text-align: center;
      }

      .rooms {
          border-right: 1px solid #979797;
          padding-right: 10px;
      }
      .distance {
          width: 100%;

      }

      .pos-recommended {
          top: 302px;
      }

      form .input-km {
          width: 80%;
      }
  }

  @media screen and (max-width: 415px){
      form input {
          flex-direction: column;
      }
  }

  @media screen and (max-width: 400px) {
      h1 {
          margin: 0 40px;
      }

      .rooms, .beds, .destination, .distance {
          margin: auto;
          padding: 5px 0px;
          border-right: none;
          width: 100%;
      }

      .pos-recommended {
          top: 393px;
      }

      .container-recommended {
          width: 80%;
      }

      .search-app form {
          flex-direction: column;
      }


  }

  // /MEDIA QUERY

</style>

