<template>
  <view class="container">
    <!-- Search Bar -->
    <view class="search-bar">
      <view class="search-dropdown" @tap="searchToggleDropdown" style="width: 25%;">
        <text>{{ selectedOption }}</text>
        <uni-icons :type="showDropdown ? 'up' : 'down'" class="arrow-search"/>
      </view>
      <view v-if="showDropdown" class="dropdown-menu-short">
        <view v-for="(option, index) in options" :key="index" class="dropdown-item" @tap="selectOption(option)">
          <text :class="{'selected': option === selectedOption}">{{ option }}</text>
        </view>
      </view>
      <input class="search-input" type="text" placeholder="搜索案例资料" v-model="searchQuery" />
      <button class="search-button" @tap="onSearch">
        <uni-icons type="search" color="#ffffff" size="25"/>
      </button>
    </view>
    
    <!-- Tabs 求职 申研 -->
    <view class="tabs">
      <view class="tab" :class="{ active: activeTab === 'jobs' }" @tap="selectTab('jobs')">求职</view>
      <view class="tab" :class="{ active: activeTab === 'study' }" @tap="selectTab('study')">申研</view>
    </view>
    
    <!-- Filters -->
    <view class="filters">
      <view v-if="activeTab === 'jobs'" class="filter" @tap="toggleDropdown('location')">
        求职地域
        <uni-icons :type="dropdowns.location ? 'up' : 'down'" class="arrow-filter"/>
        <view v-if="dropdowns.location" class="filter-dropdown-long">
          <view @tap="filterBy('location', 'all')" :class="{'selected': filters.location === 'all', 'filter-dropdown-item': true}">全职</view>
          <view @tap="filterBy('location', 'internship')" :class="{'selected': filters.location === 'internship', 'filter-dropdown-item': true}">实习</view>
          <view @tap="filterBy('location', 'blank1')" :class="{'selected': filters.location === 'blank1', 'filter-dropdown-item': true}">空白1</view>
          <view @tap="filterBy('location', 'blank2')" :class="{'selected': filters.location === 'blank2', 'filter-dropdown-item': true}">空白2</view>
        </view>
      </view>
      <view v-if="activeTab === 'jobs'" class="filter" @tap="toggleDropdown('position')">
        岗位类别
        <uni-icons :type="dropdowns.position ? 'up' : 'down'" class="arrow-filter"/>
        <view v-if="dropdowns.position" class="filter-dropdown-long">
          <view @tap="filterBy('position', 'fulltime')" :class="{'selected': filters.position === 'fulltime', 'filter-dropdown-item1': true}">全职</view>
          <view @tap="filterBy('position', 'internship')" :class="{'selected': filters.position === 'internship'}">实习</view>
        </view>
      </view>
      <view v-if="activeTab === 'study'" class="filter" @tap="toggleDropdown('studyLocation')">
        申研地域
        <uni-icons :type="dropdowns.studyLocation ? 'up' : 'down'" class="arrow-filter"/>
        <view v-if="dropdowns.studyLocation" class="filter-dropdown-long">
          <view @tap="filterBy('studyLocation', 'domestic')" :class="{'selected': filters.studyLocation === 'domestic', 'filter-dropdown-item': true}">国内</view>
          <view @tap="filterBy('studyLocation', 'international')" :class="{'selected': filters.studyLocation === 'international', 'filter-dropdown-item': true}">国外</view>
        </view>
      </view>
      <view v-if="activeTab === 'study'" class="filter" @tap="toggleDropdown('studyInstitution')">
        所属院校
        <uni-icons :type="dropdowns.studyInstitution ? 'up' : 'down'" class="arrow-filter"/>
        <view v-if="dropdowns.studyInstitution" class="filter-dropdown-long">
          <view @tap="filterBy('studyInstitution', 'institution1')" :class="{'selected': filters.studyInstitution === 'institution1', 'filter-dropdown-item1': true}">院校1</view>
          <view @tap="filterBy('studyInstitution', 'institution2')" :class="{'selected': filters.studyInstitution === 'institution2'}">院校2</view>
        </view>
      </view>
    </view>
    
    <!-- 面经s -->
    <!-- 求职面经 -->
    <view v-show="activeTab === 'jobs'" class="mianjings">
      <scroll-view class="card-list" scroll-y>
        <card
          v-for="(item, index) in company_list"
          :key="index"
          :image="item.image"
          :title="item.title"
          :subtitle="item.subtitle"
          :tag="item.tag"
          :views="item.views"
          @tap="openSubpage('company', item)"
        />
      </scroll-view>
    </view>
    
    <!-- 考研面经 -->
    <view v-show="activeTab === 'study'" class="mianjings">
      <scroll-view class="card-list" scroll-y>
        <card
          v-for="(item, index) in university_list"
          :key="index"
          :image="item.image"
          :title="item.title"
          :subtitle="item.subtitle"
          :tag="item.tag"
          :views="item.views"
          @tap="openSubpage('university', item)"
        />
      </scroll-view>
    </view>
    
    <!-- Bottom Navigation Bar -->
    <view class="bottom-nav">
      <view class="nav-item" @tap="navigate('home')">
        <uni-icons type="home" size="25"/>
        <text>首页</text>
      </view>
      <view class="nav-item" @tap="navigate('info')" :class="{ active: activeNav === 'info' }">
        <uni-icons type="help" size="25" color="#4285f4"/>
        <text>信息</text>
      </view>
      <view class="nav-item" @tap="navigate('profile')">
        <uni-icons type="person" size="25"/>
        <text>个人中心</text>
      </view>
    </view>
  </view>
</template>

<script>
import card from '/components/card.vue';
import { company_list, university_list } from '/components/card_data.js';

export default {
  components: {
    card,
  },
  data() {
    return {
      searchQuery: '',
      selectedOption: '按公司',
      options: ['按公司', '按岗位', '按专业', '按学校'],
      showDropdown: false,
      activeTab: 'jobs',
      dropdowns: {
        location: false,
        position: false,
        studyLocation: false,
        studyInstitution: false,
      },
      filters: {
        location: null,
        position: null,
        studyLocation: null,
        studyInstitution: null,
      },
      activeNav: 'info', // Set the active navigation item
      company_list,
      university_list,
    };
  },
  methods: {
    searchToggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.showDropdown = false;
      if (option === '按公司' || option === '按岗位') {
        this.activeTab = 'jobs';
      } else {
        this.activeTab = 'study';
      }
    },
    onSearch() {
      // Handle search logic here
      console.log('Search query:', this.searchQuery, 'Selected option:', this.selectedOption);
    },
    selectTab(tab) {
      this.activeTab = tab;
    },
    toggleDropdown(type) {
      this.dropdowns[type] = !this.dropdowns[type];
      for (let key in this.dropdowns) {
        if (key !== type) {
          this.dropdowns[key] = false;
        }
      }
    },
    filterBy(type, value) {
      this.filters[type] = value;
      this.dropdowns[type] = false;
      if (type === 'location' || type === 'position') {
        this.activeTab = 'jobs';
      }
    },
    navigate(page) {
      this.activeNav = page;
      // Handle navigation logic here
      console.log('Navigating to:', page);
    },
    openSubpage(type, item) {
      const list = type === 'company' ? this.company_list : this.university_list;
      const listString = encodeURIComponent(JSON.stringify(list));
      const page = type === 'company' ? 'companySubpage' : 'universitySubpage';
      uni.navigateTo({
        url: `/pages/${page}/${page}?title=${item.title}&list=${listString}`
      });
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  height: 100vh;
  background-color: #ffffff;
}

.search-bar {
  display: flex;
  align-items: center;
  width: 90%;
  height: 40px;
  background-color: #F2F3F5;
  border-radius: 5px;
  position: relative;
  margin-bottom: 5px;
  z-index: 10;
}

.search-dropdown {
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
}

.arrow-search {
  margin-left: 5px;
}

.arrow-filter {
  margin-left: -7px;
}

.dropdown-menu-short {
  position: absolute;
  top: 45px;
  left: 0;
  width: 25%; /* Set to shorter width */
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 20;
}

.filter-dropdown-long {
  position: absolute;
  top: 100%;
  left: 0;
  width: 90%; /* Set to longer width */
  background: #ffffff;
  list-style: none;
  padding: 5px 0;
  margin: 0;
  border: 1px solid #ddd;
  z-index: 20;
}

.dropdown-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
  text-align: center;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.selected {
  color: #4285f4;
}

.search-input {
  flex: 1;
  height: 100%;
  padding: 0 10px;
  border: none;
  outline: none;
}

.search-button {
  width: 40px;
  height: 40px;
  background-color: #4285f4;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 5px 5px 0;
}

.tabs {
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #ffffff;
  margin-top: 10px;
}

.tab {
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
}

.tab.active {
  border-bottom: 5px solid #4285f4;
}

.filters {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
}

.filter {
  position: relative;
  cursor: pointer;
}

.filter text {
  margin-left: 5px;
}

.filter text.open {
  transform: rotate(180deg);
}

.filter-dropdown-location,
.filter-dropdown-position,
.filter-dropdown-studyLocation,
.filter-dropdown-studyInstitution {
  position: absolute;
  top: 100%;
  left: 0;
  width: 90%; /* Set to longer width */
  background: #ffffff;
  list-style: none;
  padding: 5px 0;
  margin: 0;
  border: 1px solid #ddd;
  z-index: 20;
}

.filter-dropdown-location view,
.filter-dropdown-position view,
.filter-dropdown-studyLocation view,
.filter-dropdown-studyInstitution view {
  padding: 5px 10px;
  cursor: pointer;
}

.filter-dropdown-location view:hover,
.filter-dropdown-position view:hover,
.filter-dropdown-studyLocation view:hover,
.filter-dropdown-studyInstitution view:hover {
  background: #f0f0f0;
}

.filter-dropdown-item {
  border-bottom: 1px solid #eee;
}

.filter-dropdown-item1 {
  border-bottom: 1px solid #eee;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  border-top: 1px solid #ddd;
  padding: 10px 0;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.nav-item text {
  margin-top: 5px;
  font-size: 12px;
}

.nav-item.active uni-icons,
.nav-item.active text {
  color: #4285f4;
}

.mianjings {
  width: 100%;
  flex: 1;
}

.card-list {
  width: 100%;
}
</style>


