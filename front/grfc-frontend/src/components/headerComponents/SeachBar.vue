<template>
  <div class="container_SearchBar">
    <div class="search-bar">
      <input type="search" name="seacrh" class="input_search" placeholder="Search...">
      <button name="search_button" type="submit" class="search_btn">
        <figure class="search_btn">
          <img src="../../assets/search_btn.png" alt="" class="search_btn_png">
        </figure>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SearchBar',
};
</script>

<style lang="scss" scoped>

.container_SearchBar {
  margin-top: 22px;
  margin-left: 23vw;
}

.search-bar {
  display: flex;
  width: 600px;
  height: 52px;
  background-color: #ffffff;
  border-radius: 50px;
}

.input_search {
  margin-top: 12px;
  margin-left: 19px;
  width: 533px;
  height: 28px;
  outline: 0;
  border: 0;
  font-family: 'Raleway', sans-serif;
  font-size: 24px;
  font-weight: 400;
}

.search_btn_png {
  width: 27px;
  height: 27px;
  margin-top: 12px;
}

.search_btn {
  width: 27px;
  height: 27px;
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration { display: none; }

</style>
