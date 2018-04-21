<template>
  <div class="flex flex-col justify-around mt-6 mb-6 leading-loose">
    <div class="ml-6 self-start font-normal italic text-grey">
    {{character}}
    </div> 
    <div>
    She had
    <span :class="getStyle('A')">
      {{fillWord('A')}}
    </span>
    like 
    <span :class="getStyle('B')">
      {{fillWord('B')}}
    </span>

    <span :class="getStyle('C')">
      {{fillWord('C')}}
    </span>
    and I 
    <span :class="getStyle('D')">
      {{fillWord('D')}}
    </span>
    to 
    <span :class="getStyle('E')">
      {{fillWord('E')}}
    </span>
    her
    </div>
    <div class="mr-6 self-end font-normal italic text-grey">
    &mdash; Some Dude
    </div>
  </div>
</template>

<script>
export default {
  props: ["character", "query", "colors"],
  methods: {
    fillWord(key) {
      return this.query[key].word === ""
        ? `{  ${key}  }`
        : this.query[key].word;
    },
    getStyle(key) {
      const color = this.colors[key];
      return `pl-1 mr-1  bg-${color}-light `;
    }
  }
};
</script>

<style>

</style>
