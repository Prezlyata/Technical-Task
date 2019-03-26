<template>
  <div id="tableVue" class="container-fluid">
    <header>{{ title }}</header>

    <modal name="hello-world">
      <input v-on:keypress.enter="addItem" id="callControl">
      <input v-on:keypress.enter="addItem" id="read">
      <input v-on:keypress.enter="addItem" id="sound">
      <input v-on:keypress.enter="addItem" id="truck">
      <input v-on:keypress.enter="addItem" id="origin">
      <input v-on:keypress.enter="addItem" id="destination">
      <input v-on:keypress.enter="addItem" id="pickup">
      <input v-on:keypress.enter="addItem" id="dho">
      <input v-on:keypress.enter="addItem" id="dhd">
      <input v-on:keypress.enter="addItem" id="fp">
      <input v-on:keypress.enter="addItem" id="len">
      <input v-on:keypress.enter="addItem" id="weight">
      <input v-on:keypress.enter="addItem" id="trip">
      <input v-on:keypress.enter="addItem" id="actions">
      <button v-on:click="addItem">Add</button>
    </modal>
    <button v-on:click="show">open modal</button>

    <ul>
      <li v-for="(item, index) in items" :key="`${index}-${item.id}`">
        <button id="x" v-on:click="deleteItem(index)">Delete</button>
        <th>{{ item.callControl }}</th>
        <th>{{ item.read }}</th>
        <th>{{ item.sound }}</th>
        <th>{{ item.truck }}</th>
        <th>{{ item.origin }}</th>
        <th>{{ item.destination }}</th>
        <th>{{ item.pickup }}</th>
        <th>{{ item.dho }}</th>
        <th>{{ item.dhd }}</th>
        <th>{{ item.fp }}</th>
        <th>{{ item.len }}</th>
        <th>{{ item.weight }}</th>
        <th>{{ item.trip }}</th>
        <th>{{ item.actions }}</th>
      </li>
    </ul>
    <button v-on:click="deleteTable">Delete table</button>
    <button v-on:click="clearInputs">Clear fields</button>
    <button v-on:click="play">Play</button>
    <button v-on:click="stop">Stop</button>
  </div>
</template>

<script>
export default {
  name: "tableVue",
  data() {
    return {
      title: "Vue",
      items: [],
      playObject: {
        callControl: 'play',
        read: 'play',
        sound: 'play',
        truck: 'play',
        origin: 'play',
        destination: 'play',
        pickup: 'play',
        dho: 'play',
        dhd: 'play',
        fp: 'play',
        len: 'play',
        weight: 'play',
        trip: 'play',
        actions: 'play'
      }
    };
  },
  methods: {
    addItem: function() {
      const callControl = document.getElementById("callControl");
      const read = document.getElementById("read");
      const sound = document.getElementById("sound");
      const truck = document.getElementById("truck");
      const origin = document.getElementById("origin");
      const destination = document.getElementById("destination");
      const pickup = document.getElementById("pickup");
      const dho = document.getElementById("dho");
      const dhd = document.getElementById("dhd");
      const fp = document.getElementById("fp");
      const len = document.getElementById("len");
      const weight = document.getElementById("weight");
      const trip = document.getElementById("trip");
      const alarm = document.getElementById("actions");
      if (callControl.value !== "") {
        this.items.push({
          callControl: callControl.value,
          read: read.value,
          sound: sound.value,
          truck: truck.value,
          origin: origin.value,
          destination: destination.value,
          pickup: pickup.value,
          dho: dho.value,
          dhd: dhd.value,
          fp: fp.value,
          len: len.value,
          weight: weight.value,
          trip: trip.value,
          actions: actions.value
        });
        this.clearInputs();
      }
      this.hide();
    },
    deleteItem: function(index) {
      this.items.splice(index, 1);
    },
    deleteTable: function() {
      this.items.length = 0;
      this.$forceUpdate();
    },
    clearInputs: function() {
      document.getElementById("callControl").value = '';
      document.getElementById("read").value = '';
      document.getElementById("sound").value = '';
      document.getElementById("truck").value = '';
      document.getElementById("origin").value = '';
      document.getElementById("destination").value = '';
      document.getElementById("pickup").value = '';
      document.getElementById("dho").value = '';
      document.getElementById("dhd").value = '';
      document.getElementById("fp").value = '';
      document.getElementById("len").value = '';
      document.getElementById("weight").value = '';
      document.getElementById("trip").value = '';
      document.getElementById("actions").value = '';
    },
    play: function() {
      let self = this;
      setInterval(function(){
        self.items.push(self.playObject);
        self.$forceUpdate();
      }, 1000);
    },
    stop: function () {
      for (let i = 1; i < 99999; i++) {
        window.clearInterval(i);
      }
    },
    show () {
      this.$modal.show('hello-world');
    },
    hide () {
      this.$modal.hide('hello-world');
    }
  }
};
</script>

<style lang="scss">
input {
  border: 5px solid #000;
}
</style>