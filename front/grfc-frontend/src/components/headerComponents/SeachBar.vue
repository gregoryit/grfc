<template>
  <div class="search-bar">
    <input
      type="search"
      name="seacrh"
      class="search-bar__input"
      placeholder="Поиск..."
    />
    <button name="search_button" type="submit" class="search-input__button">
      <figure class="search-bar__figure">
        <img src="../../assets/search_btn.png" alt="" class="search-bar__img" />
      </figure>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SearchBar',
};
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  width: 600px;
  height: 52px;
  background-color: #ffffff;
  border-radius: 50px;
}

.search-input__button {
  width: 27px;
  height: 27px;
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
}

.search-bar__input {
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

.search-bar__img {
  width: 27px;
  height: 27px;
  margin-top: 12px;
}

input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  display: none;
}
</style>
