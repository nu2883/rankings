var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      show_menu:false,
      rankings:[],


    },
    methods:{
        mklikMenu(){
            this.show_menu = true;
        }
    },

    created(){
      this.rankings = [];

      var url ="https://script.google.com/macros/s/AKfycbx6jx9ZCEFAe7tdpSnNAvzyLkEB__oEsA08wA3YhBcBbH-aDZZhK6la_yvEUh3fUWf17g/exec?action=read&table=QPoints";

      $.getJSON(url, function (json) {
      // console.log(json.data);
      // console.log(json.data.records)
      app.rankings = json.data;
      });

      // alert('selesai ambil data');

    },

  })