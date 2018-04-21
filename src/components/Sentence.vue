<template>
  <div class="flex flex-col content-center w-1/3 m-auto leading-loose">
    <div class="self-start font-normal italic text-grey">
    On {{character ? character : 'the not at all offensive female character'}}:
    </div>
    <div class="text-lg font-bold">
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
    <div class="self-end font-normal italic text-grey">
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
      return `pl-1 mr-1 bg-${color}-light `;
    }
  }
};
</script>

<style>

</style>
