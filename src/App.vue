<template>
  <div id="app" class="flex flex-col">
  <header>
    <h1 class="mb-2">Male Novelist Description Generator</h1>
    <h2 class="mb-2">by Electric Literature</h2>
    <p class="ml-8 mr-8">Type in your name, and become a realistic and not at all offensive female character in some dude's book</p>
  </header>
    <input class="bg-grey-light m-6 p-2" type="text" v-model="userInput" value="userInput" placeholder="What's your name?">
    <h3>
    <Sentence :character="userInput" :query="query" :colors="colors">
    </Sentence>
    </h3>
    <table>
      <tr>
        <th v-for="h in ['A', 'B', 'C', 'D', 'E']" :key="`head-${h}`">
          {{h}}
        </th>
      </tr>
      <tr v-for="(row, index) in table" :key="`row-${index}`">
        <td v-for="col in ['A', 'B', 'C', 'D', 'E']" :key="`row-${index}-col-${col}`">
          <TableCell :row-data="row" :column-key="col" :query="query" :colors="colors"></TableCell>
        </td>
      </tr> 
    </table>
    <footer class="flex justify-around p-4">
      <span>Made by <a href="https://twitter.com/pj_trainor">PJ Trainor</a></span>
      <span><a href="https://electricliterature.com/if-youre-not-sure-how-a-male-author-would-describe-you-use-our-handy-chart-6a44afe0e586">See the original article!</a></span>
    </footer>
  </div>
</template>

<script>
import TableCell from "./components/TableCell";
import Sentence from "./components/Sentence";
import table from "./assets/table";

export default {
  name: "App",
  components: {
    TableCell,
    Sentence
  },
  data() {
    return {
      userInput: "",
      table,
      colors: {
        A: "yellow",
        B: "orange",
        C: "red",
        D: "purple",
        E: "blue"
      }
    };
  },
  computed: {
    query() {
      return {
        A: this.getLetterFromInput(0, "A"),
        B: this.getLetterFromInput(1, "B"),
        C: this.getLetterFromInput(2, "C"),
        D: this.getLetterFromInput(3, "D"),
        E: this.getLetterFromInput(4, "E")
      };
    }
  },
  methods: {
    getLetterFromInput(index, column) {
      const inputWithoutSpaces = this.userInput.replace(/\s/g, "");

      const letter =
        index < inputWithoutSpaces.length
          ? inputWithoutSpaces[index].toLowerCase()
          : "";

      const indexOfWord =
        letter !== "" ? this.table.map(r => r.alpha).indexOf(letter) : "";

      const word = indexOfWord !== "" ? this.table[indexOfWord][column] : "";

      return {
        letter,
        indexOfWord,
        word
      };
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
