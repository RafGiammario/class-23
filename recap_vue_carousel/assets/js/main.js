let app = new Vue({
  el: '#app',
  data: {
    images: [
      './assets/img/img1.jpg',
      './assets/img/img2.jpg',
      './assets/img/img3.jpg',
      './assets/img/img4.jpg',
    ],
    counter: 0
  },
  created: function () {
    setInterval(this.next, 2000)
  },
  methods: {
    next: function() {
      this.counter++; //incrementa
      if (this.counter > this.images.length - 1) {
        this.counter = 0
      }
    },
    prev: function() {
      this.counter--; //diminuire
      if (this.counter < 0) {
        this.counter = this.images.length - 1
      }
    }
  }
})
