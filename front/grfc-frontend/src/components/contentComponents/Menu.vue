<template>
  <menu
    class="menu-wrapper"
    :class="{ active: $store.state.menu.isMenuActive }"
  >
    <div class="menu-content">
      <div class="search-bar__container">
        <div class="search-bar">
          <input
            type="search"
            name="seacrh"
            class="search-bar__input"
            placeholder="Search..."
          />
          <button
            name="search_button"
            type="submit"
            class="search-input__button"
          >
            <figure class="search-bar__figure">
              <img
                src="../../assets/header/search_btn.svg"
                alt=""
                class="search-bar__img"
              />
            </figure>
          </button>
        </div>
      </div>
      <div class="first-layer">
        <img class="menu-type" src="../../assets/menu/menu_doc.svg" alt="" />
        <div class="first-layer-text">Администрирование</div>
        <img src="../../assets/menu/arrow_down.svg" class="menu-arrow" alt="" />
      </div>
      <div class="second-layer">
        <img class="menu-type" src="../../assets/menu/menu_doc.svg" alt="" />
        <div class="first-layer-text">Пользователи</div>
        <img src="../../assets/menu/arrow_down.svg" class="menu-arrow" alt="" />
      </div>
      <div class="second-layer">
        <img class="menu-type" src="../../assets/menu/menu_doc.svg" alt="" />
        <div class="first-layer-text">Запросы</div>
        <img src="../../assets/menu/arrow_down.svg" class="menu-arrow" alt="" />
      </div>
      <div class="third-layer">
        <img class="menu-type" src="../../assets/menu/menu_folder.svg" alt="" />
        <div class="first-layer-text">Аудит</div>
      </div>
      <div class="third-layer">
        <img class="menu-type" src="../../assets/menu/menu_folder.svg" alt="" />
        <div class="first-layer-text">История активности</div>
      </div>
      <div class="third-layer">
        <img class="menu-type" src="../../assets/menu/menu_folder.svg" alt="" />
        <div class="first-layer-text">Очередь</div>
      </div>
      <div class="third-layer">
        <img class="menu-type" src="../../assets/menu/menu_folder.svg" alt="" />
        <div class="first-layer-text">Системные задания</div>
      </div>
      <div class="second-layer">
        <img class="menu-type" src="../../assets/menu/menu_doc.svg" alt="" />
        <div class="first-layer-text">Периодические операции</div>
        <img src="../../assets/menu/arrow_down.svg" class="menu-arrow" alt="" />
      </div>
      <div class="third-layer">
        <img class="menu-type" src="../../assets/menu/menu_folder.svg" alt="" />
        <div class="first-layer-text">Системные задания</div>
      </div>
      <div class="second-layer">
        <img class="menu-type" src="../../assets/menu/menu_doc.svg" alt="" />
        <div class="first-layer-text">Настройки</div>
        <img src="../../assets/menu/arrow_down.svg" class="menu-arrow" alt="" />
      </div>
      <div class="third-layer">
        <img class="menu-type" src="../../assets/menu/menu_folder.svg" alt="" />
        <div class="first-layer-text">Аудит</div>
      </div>
      <div class="third-layer">
        <img class="menu-type" src="../../assets/menu/menu_folder.svg" alt="" />
        <div class="first-layer-text">Группы пользователей</div>
      </div>
      <div class="third-layer">
        <img class="menu-type" src="../../assets/menu/menu_folder.svg" alt="" />
        <div class="first-layer-text">Номерные серии</div>
      </div>
      <div class="third-layer">
        <img class="menu-type" src="../../assets/menu/menu_folder.svg" alt="" />
        <div class="first-layer-text">Объекты</div>
      </div>
      <div class="third-layer">
        <img class="menu-type" src="../../assets/menu/menu_folder.svg" alt="" />
        <div class="first-layer-text">Параметры</div>
      </div>
      <div class="third-layer">
        <img class="menu-type" src="../../assets/menu/menu_folder.svg" alt="" />
        <div class="first-layer-text">Шаблоны</div>
      </div>
    </div>
  </menu>
</template>

<script lang="ts">
export default {
  name: 'ContentMenu',
};
</script>

<style lang="scss" scoped>
.menu-wrapper {
  display: none;
  z-index: 1000;
  height: 100%;
}
.menu-wrapper.active {
  display: block;
}
.menu-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
  padding: 10px 12px;
  background-color: #000855;
}
.search-bar {
  display: flex;
  height: 35px;
  background-color: #ffffff;
  border-radius: 50px;
  padding: 0 8px;
  align-items: center;
  justify-content: space-between;
}

.search-input__button {
  width: 15px;
  height: 15px;
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
}

.search-bar__input {
  outline: 0;
  border: 0;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 400;
  flex: 1;
}

.search-bar__img {
  width: 15px;
  height: 15px;
}

.first-layer {
  display: flex;
  color: #ffffff;
  align-items: center;
}

.menu-type {
  margin-right: 7px;
  width: 13px;
  height: 18px;
}

.menu-arrow {
  margin-left: auto;
  width: 15px;
  height: 12px;
}

.second-layer {
  margin-left: 12px;
  display: flex;
  color: #ffffff;
  align-items: center;
}

.third-layer {
  margin-left: 24px;
  display: flex;
  color: #ffffff;
  align-items: center;

  .menu-type {
    height: 21px;
    width: 25px;
  }
}
</style>
