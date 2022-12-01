Vue.createApp({
  //this below property needs to be named exactly as 'data' : data = function(){return{}} or data() {return{}} both mean the same
  data() {
    return {
      goals: [],
      enteredValue: '',
      googleLink: 'https://www.google.com', //to explain v-bind
      vhtmlProperty: '<h1>This H1 code is being used from a Vue property using v-html</h1>' //to explain v-html
    };
  },

  //this below property needs to be named exactly as 'methods' with plural
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
}).mount('#app');



// //getting all the elements, which are button to add, input to get data from and ul to add a list item (li) to
// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// //a function which will get the value from input, create a li, fill this li with data from input and add this li to ul and clear the input
// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// //setting click listener on button
// buttonEl.addEventListener('click', addGoal);