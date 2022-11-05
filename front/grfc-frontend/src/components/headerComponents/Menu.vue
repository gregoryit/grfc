<template>
  <menu>
    <div class="menu-wrapper">
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
                  src="../../assets/search_btn.png"
                  alt=""
                  class="search-bar__img"
                />
              </figure>
            </button>
          </div>
        </div>
        <div class="first-layer">
          <img class="menu-type" src="../../assets/menu_doc.png" alt="" />
          <div class="first-layer-text">Администрирование</div>
          <img src="../../assets/arrow_down.png" class="menu-arrow" alt="" />
        </div>
        <div class="second-layer">
          <img class="menu-type" src="../../assets/menu_doc.png" alt="" />
          <div class="first-layer-text">Пользователи</div>
          <img src="../../assets/arrow_down.png" class="menu-arrow" alt="" />
        </div>
        <div class="second-layer">
          <img class="menu-type" src="../../assets/menu_doc.png" alt="" />
          <div class="first-layer-text">Запросы</div>
          <img src="../../assets/arrow_down.png" class="menu-arrow" alt="" />
        </div>
        <div class="third-layer">
          <img class="menu-type" src="../../assets/menu_folder.png" alt="" />
          <div class="first-layer-text">Аудит</div>
        </div>
        <div class="third-layer">
          <img class="menu-type" src="../../assets/menu_folder.png" alt="" />
          <div class="first-layer-text">История активности</div>
        </div>
        <div class="third-layer">
          <img class="menu-type" src="../../assets/menu_folder.png" alt="" />
          <div class="first-layer-text">Очередь</div>
        </div>
        <div class="third-layer">
          <img class="menu-type" src="../../assets/menu_folder.png" alt="" />
          <div class="first-layer-text">Системные задания</div>
        </div>
        <div class="second-layer">
          <img class="menu-type" src="../../assets/menu_doc.png" alt="" />
          <div class="first-layer-text">Периодические операции</div>
          <img src="../../assets/arrow_down.png" class="menu-arrow" alt="" />
        </div>
        <div class="third-layer">
          <img class="menu-type" src="../../assets/menu_folder.png" alt="" />
          <div class="first-layer-text">Системные задания</div>
        </div>
        <div class="second-layer">
          <img class="menu-type" src="../../assets/menu_doc.png" alt="" />
          <div class="first-layer-text">Настройки</div>
          <img src="../../assets/arrow_down.png" class="menu-arrow" alt="" />
        </div>
        <div class="third-layer">
          <img class="menu-type" src="../../assets/menu_folder.png" alt="" />
          <div class="first-layer-text">Аудит</div>
        </div>
        <div class="third-layer">
          <img class="menu-type" src="../../assets/menu_folder.png" alt="" />
          <div class="first-layer-text">Группы пользователей</div>
        </div>
        <div class="third-layer">
          <img class="menu-type" src="../../assets/menu_folder.png" alt="" />
          <div class="first-layer-text">Номерные серии</div>
        </div>
        <div class="third-layer">
          <img class="menu-type" src="../../assets/menu_folder.png" alt="" />
          <div class="first-layer-text">Объекты</div>
        </div>
        <div class="third-layer">
          <img class="menu-type" src="../../assets/menu_folder.png" alt="" />
          <div class="first-layer-text">Параметры</div>
        </div>
        <div class="third-layer">
          <img class="menu-type" src="../../assets/menu_folder.png" alt="" />
          <div class="first-layer-text">Шаблоны</div>
        </div>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.menu-content {
  width: 360px;
  height: 801px;
  background-color: #000855;
}
.search-bar__container {
  padding-top: 18px;
  padding-left: 19px;
}

.search-bar {
  display: flex;
  width: 330px;
  height: 35px;
  background-color: #ffffff;
  border-radius: 50px;
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
  margin-top: 8px;
  margin-left: 11px;
  width: 290px;
  height: 19px;
  outline: 0;
  border: 0;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 400;
}

.search-bar__img {
  width: 15px;
  height: 15px;
  margin-top: 10px;
}

.first-layer {
  width: 300px;
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #ffffff;
  margin-left: 35px;
  margin-top: 26px;
  align-items: center;
}

.menu-type {
  margin-right: 7px;
  width: 13px;
  height: 18px;
}

.menu-arrow {
  margin-left: auto;
  margin-right: 0;
  width: 15px;
  height: 12px;
}

.second-layer {
  width: 282px;
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #ffffff;
  margin-left: 53px;
  margin-top: 8px;
  align-items: center;
}

.third-layer {
  width: 241px;
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #ffffff;
  margin-left: 94px;
  margin-top: 8px;
  align-items: center;

  .menu-type {
    height: 21px;
    width: 25px;
  }
}
</style>
