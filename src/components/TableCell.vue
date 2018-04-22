<template>
  <div :class="`flex md:justify-between text-xs md:text-base ${styleOnMatch}`">
    <div class="text-left">
      {{rowData.alpha}}
    </div>
    <div class="md:invisible">
      &ndash;
    </div>
    <div class="text-right">
      {{rowData[columnKey]}}
    </div>
  </div>
</template>

<script>
export default {
  props: ["rowData", "columnKey", "query", "colors"],
  data() {
    return {
      letter: this.rowData.alpha,
      word: this.rowData[this.columnKey],
      color: this.colors[this.columnKey]
    };
  },
  computed: {
    cellDoesMatch() {
      const queryLetter = this.query[this.columnKey].letter;
      const cellLetter = this.letter;

      return queryLetter === cellLetter;
    },
    styleOnMatch() {
      return this.cellDoesMatch === true
        ? `font-bold bg-${this.color}`
        : `bg-${this.color}-lightest`;
    }
  }
};
</script>

<style>

</style>
