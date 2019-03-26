<template>
  <div id="tableVue" class="container">
    <header>{{ title }}</header>

    <modal name="hello-world" :height="500" :width="350">
      <div class="iputModal">
        <input v-on:keypress.enter="addItem" id="callControl" placeholder="callControl">
        <input v-on:keypress.enter="addItem" id="read" placeholder="read">
        <input v-on:keypress.enter="addItem" id="sound" placeholder="sound">
        <input v-on:keypress.enter="addItem" id="truck" placeholder="truck">
        <input v-on:keypress.enter="addItem" id="origin" placeholder="origin">
        <input v-on:keypress.enter="addItem" id="destination" placeholder="destination">
        <input v-on:keypress.enter="addItem" id="pickup" placeholder="pickup">
        <input v-on:keypress.enter="addItem" id="dho" placeholder="dho">
        <input v-on:keypress.enter="addItem" id="dhd" placeholder="dhd">
        <input v-on:keypress.enter="addItem" id="fp" placeholder="fp">
        <input v-on:keypress.enter="addItem" id="len" placeholder="length">
        <input v-on:keypress.enter="addItem" id="weight" placeholder="weight">
        <input v-on:keypress.enter="addItem" id="trip" placeholder="trip">
        <input v-on:keypress.enter="addItem" id="alarm" placeholder="alarm">
        <input v-on:keypress.enter="addItem" id="actions" placeholder="actions">
        <div class="btn">
          <button v-on:click="addItem">Add</button>
          <button v-on:click="clearInputs">Clear fields</button>
        </div>
      </div>
    </modal>
    <button v-on:click="show">open modal</button>
    <button v-on:click="deleteTable">Delete table</button>
    <button v-on:click="play">Play</button>
    <button v-on:click="stop">Stop</button>
    <table>
      <thead>
        <tr>
          <th scope="col">Call Control</th>
          <th scope="col">Read</th>
          <th scope="col">Sound</th>
          <th scope="col">Truck</th>
          <th scope="col">Origin</th>
          <th scope="col">Destination</th>
          <th scope="col">Pickup</th>
          <th scope="col">DH-O</th>
          <th scope="col">DH-D</th>
          <th scope="col">F/P</th>
          <th scope="col">Length</th>
          <th scope="col">Weight</th>
          <th scope="col">Trip</th>
          <th scope="col">Alarm</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="`${index}-${item.id}`">
          <td scope="row" data-label="Call Control">{{ item.callControl }}</td>
          <td data-label="Read">{{ item.read }}</td>
          <td data-label="Sound">{{ item.sound }}</td>
          <td data-label="Truck">{{ item.truck }}</td>
          <td data-label="Origin">{{ item.origin }}</td>
          <td data-label="Destination">{{ item.destination }}</td>
          <td data-label="Pickup">{{ item.pickup }}</td>
          <td data-label="DH-O">{{ item.dho }}</td>
          <td data-label="DH-D">{{ item.dhd }}</td>
          <td data-label="F/P">{{ item.fp }}</td>
          <td data-label="Length">{{ item.len }}</td>
          <td data-label="Weight">{{ item.weight }}</td>
          <td data-label="Trip">{{ item.trip }}</td>
          <td data-label="Alarm">{{ item.alarm }}</td>
          <td data-label="Actions">{{ item.actions }}</td>
          <button id="x" v-on:click="deleteItem(index)">Delete</button>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "tableVue",
  data() {
    return {
      title: "Post Trucks",
      items: [],
      playObject: {
        callControl: "play",
        read: "play",
        sound: "play",
        truck: "play",
        origin: "play",
        destination: "play",
        pickup: "play",
        dho: "play",
        dhd: "play",
        fp: "play",
        len: "play",
        weight: "play",
        trip: "play",
        alarm: "play",
        actions: "play"
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
      const alarm = document.getElementById("alarm");
      const actions = document.getElementById("actions");
      if (
        callControl.value !== "" &&
        read.value !== "" &&
        sound.value !== "" &&
        truck.value !== "" &&
        origin.value !== "" &&
        destination.value !== "" &&
        pickup.value !== "" &&
        dho.value !== "" &&
        dhd.value !== "" &&
        fp.value !== "" &&
        len.value !== "" &&
        weight.value !== "" &&
        trip.value !== "" &&
        alarm.value !== "" &&
        actions.value !== ""
      ) {
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
          alarm: alarm.value,
          actions: actions.value
        });
        this.clearInputs();
        this.hide();
      } else {
        alert("Input all fields");
      }
    },
    deleteItem: function(index) {
      this.items.splice(index, 1);
    },
    deleteTable: function() {
      this.items.length = 0;
      this.$forceUpdate();
    },
    clearInputs: function() {
      document.getElementById("callControl").value = "";
      document.getElementById("read").value = "";
      document.getElementById("sound").value = "";
      document.getElementById("truck").value = "";
      document.getElementById("origin").value = "";
      document.getElementById("destination").value = "";
      document.getElementById("pickup").value = "";
      document.getElementById("dho").value = "";
      document.getElementById("dhd").value = "";
      document.getElementById("fp").value = "";
      document.getElementById("len").value = "";
      document.getElementById("weight").value = "";
      document.getElementById("trip").value = "";
      document.getElementById("alarm").value = "";
      document.getElementById("actions").value = "";
    },
    play: function() {
      let self = this;
      setInterval(function() {
        self.items.push(self.playObject);
        self.$forceUpdate();
      }, 1000);
    },
    stop: function() {
      for (let i = 1; i < 99999; i++) {
        window.clearInterval(i);
      }
    },
    show() {
      this.$modal.show("hello-world");
    },
    hide() {
      this.$modal.hide("hello-world");
    }
  }
};
</script>

<style lang="scss">
body {
  background-color: #c6dbeb;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
}

.iputModal {
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

input:focus {
  outline: none;
}

input {
  border: 1px solid gray;
  height: 24px;
  margin-bottom: 3px;
  border-radius: 3px;
  text-align: center;
  font-weight: 600;
  font-family: LatoLight, sans-serif;
}

input::placeholder {
  text-align: center;
}

table {
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table {
  margin-top: 25px;
}

table th {
  background-color: #454345;
  border: 1px solid #dddddd;
}

table td:nth-child(-n + 15) {
  padding: 7px 0;
  text-align: center;
  border: 1px solid #dddddd;
  background-color: #fff;
  font-family: LatoLight, sans-serif;
}

table th {
  padding: 7px 0;
  text-align: center;
  color: #fff;
  font-family: LatoLight, sans-serif;
  font-size: 15px;
  font-weight: 300;
}

@media screen and (max-width: 1271px) {
  .container {
    max-width: 350px;
  }
  table {
    border: 0;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #dddddd;
    display: block;
    margin-bottom: 7px;
  }

  table td:nth-child(-n + 15) {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 15px;
    text-align: right;
    padding: 7px 25px;
  }

  table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
</style>