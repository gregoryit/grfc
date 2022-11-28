<template>
  <div class="search-bar">
    <input
      type="search"
      name="seacrh"
      class="search-bar__input"
      placeholder="Поиск..."
    />
    <button name="search_button" type="submit" class="search-input__button">
      <img
        src="../../assets/header/search_btn.svg"
        alt=""
        class="search-bar__img"
      />
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
  height: 40px;
  background-color: #ffffff;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
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
  width: 533px;
  height: 28px;
  border: 0;
  font-size: 20px;
}

.search-bar__img {
  width: 18px;
}

input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  display: none;
}
</style>
