"use strict";
const common_vendor = require("../../common/vendor.js");
const components_card_data = require("../../components/card_data.js");
const card = () => "../../components/card.js";
const _sfc_main = {
  components: {
    card
  },
  data() {
    return {
      searchQuery: "",
      selectedOption: "按公司",
      options: ["按公司", "按岗位", "按专业", "按学校"],
      showDropdown: false,
      activeTab: "jobs",
      dropdowns: {
        location: false,
        position: false,
        studyLocation: false,
        studyInstitution: false
      },
      filters: {
        location: null,
        position: null,
        studyLocation: null,
        studyInstitution: null
      },
      activeNav: "info",
      // Set the active navigation item
      company_list: components_card_data.company_list,
      university_list: components_card_data.university_list
    };
  },
  methods: {
    searchToggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.showDropdown = false;
      if (option === "按公司" || option === "按岗位") {
        this.activeTab = "jobs";
      } else {
        this.activeTab = "study";
      }
    },
    onSearch() {
      console.log("Search query:", this.searchQuery, "Selected option:", this.selectedOption);
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
      if (type === "location" || type === "position") {
        this.activeTab = "jobs";
      }
    },
    navigate(page) {
      this.activeNav = page;
      console.log("Navigating to:", page);
    },
    openSubpage(type, item) {
      const list = type === "company" ? this.company_list : this.university_list;
      const listString = encodeURIComponent(JSON.stringify(list));
      const page = type === "company" ? "companySubpage" : "universitySubpage";
      common_vendor.index.navigateTo({
        url: `/pages/${page}/${page}?title=${item.title}&list=${listString}`
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_card = common_vendor.resolveComponent("card");
  (_easycom_uni_icons2 + _component_card)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.selectedOption),
    b: common_vendor.p({
      type: $data.showDropdown ? "up" : "down"
    }),
    c: common_vendor.o((...args) => $options.searchToggleDropdown && $options.searchToggleDropdown(...args)),
    d: $data.showDropdown
  }, $data.showDropdown ? {
    e: common_vendor.f($data.options, (option, index, i0) => {
      return {
        a: common_vendor.t(option),
        b: option === $data.selectedOption ? 1 : "",
        c: index,
        d: common_vendor.o(($event) => $options.selectOption(option), index)
      };
    })
  } : {}, {
    f: $data.searchQuery,
    g: common_vendor.o(($event) => $data.searchQuery = $event.detail.value),
    h: common_vendor.p({
      type: "search",
      color: "#ffffff",
      size: "25"
    }),
    i: common_vendor.o((...args) => $options.onSearch && $options.onSearch(...args)),
    j: $data.activeTab === "jobs" ? 1 : "",
    k: common_vendor.o(($event) => $options.selectTab("jobs")),
    l: $data.activeTab === "study" ? 1 : "",
    m: common_vendor.o(($event) => $options.selectTab("study")),
    n: $data.activeTab === "jobs"
  }, $data.activeTab === "jobs" ? common_vendor.e({
    o: common_vendor.p({
      type: $data.dropdowns.location ? "up" : "down"
    }),
    p: $data.dropdowns.location
  }, $data.dropdowns.location ? {
    q: common_vendor.o(($event) => $options.filterBy("location", "all")),
    r: $data.filters.location === "all" ? 1 : "",
    s: common_vendor.o(($event) => $options.filterBy("location", "internship")),
    t: $data.filters.location === "internship" ? 1 : "",
    v: common_vendor.o(($event) => $options.filterBy("location", "blank1")),
    w: $data.filters.location === "blank1" ? 1 : "",
    x: common_vendor.o(($event) => $options.filterBy("location", "blank2")),
    y: $data.filters.location === "blank2" ? 1 : ""
  } : {}, {
    z: common_vendor.o(($event) => $options.toggleDropdown("location"))
  }) : {}, {
    A: $data.activeTab === "jobs"
  }, $data.activeTab === "jobs" ? common_vendor.e({
    B: common_vendor.p({
      type: $data.dropdowns.position ? "up" : "down"
    }),
    C: $data.dropdowns.position
  }, $data.dropdowns.position ? {
    D: common_vendor.o(($event) => $options.filterBy("position", "fulltime")),
    E: $data.filters.position === "fulltime" ? 1 : "",
    F: common_vendor.o(($event) => $options.filterBy("position", "internship")),
    G: $data.filters.position === "internship" ? 1 : ""
  } : {}, {
    H: common_vendor.o(($event) => $options.toggleDropdown("position"))
  }) : {}, {
    I: $data.activeTab === "study"
  }, $data.activeTab === "study" ? common_vendor.e({
    J: common_vendor.p({
      type: $data.dropdowns.studyLocation ? "up" : "down"
    }),
    K: $data.dropdowns.studyLocation
  }, $data.dropdowns.studyLocation ? {
    L: common_vendor.o(($event) => $options.filterBy("studyLocation", "domestic")),
    M: $data.filters.studyLocation === "domestic" ? 1 : "",
    N: common_vendor.o(($event) => $options.filterBy("studyLocation", "international")),
    O: $data.filters.studyLocation === "international" ? 1 : ""
  } : {}, {
    P: common_vendor.o(($event) => $options.toggleDropdown("studyLocation"))
  }) : {}, {
    Q: $data.activeTab === "study"
  }, $data.activeTab === "study" ? common_vendor.e({
    R: common_vendor.p({
      type: $data.dropdowns.studyInstitution ? "up" : "down"
    }),
    S: $data.dropdowns.studyInstitution
  }, $data.dropdowns.studyInstitution ? {
    T: common_vendor.o(($event) => $options.filterBy("studyInstitution", "institution1")),
    U: $data.filters.studyInstitution === "institution1" ? 1 : "",
    V: common_vendor.o(($event) => $options.filterBy("studyInstitution", "institution2")),
    W: $data.filters.studyInstitution === "institution2" ? 1 : ""
  } : {}, {
    X: common_vendor.o(($event) => $options.toggleDropdown("studyInstitution"))
  }) : {}, {
    Y: common_vendor.f($data.company_list, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.o(($event) => $options.openSubpage("company", item), index),
        c: "71a8ec18-6-" + i0,
        d: common_vendor.p({
          image: item.image,
          title: item.title,
          subtitle: item.subtitle,
          tag: item.tag,
          views: item.views
        })
      };
    }),
    Z: $data.activeTab === "jobs",
    aa: common_vendor.f($data.university_list, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.o(($event) => $options.openSubpage("university", item), index),
        c: "71a8ec18-7-" + i0,
        d: common_vendor.p({
          image: item.image,
          title: item.title,
          subtitle: item.subtitle,
          tag: item.tag,
          views: item.views
        })
      };
    }),
    ab: $data.activeTab === "study",
    ac: common_vendor.p({
      type: "home",
      size: "25"
    }),
    ad: common_vendor.o(($event) => $options.navigate("home")),
    ae: common_vendor.p({
      type: "help",
      size: "25",
      color: "#4285f4"
    }),
    af: common_vendor.o(($event) => $options.navigate("info")),
    ag: $data.activeNav === "info" ? 1 : "",
    ah: common_vendor.p({
      type: "person",
      size: "25"
    }),
    ai: common_vendor.o(($event) => $options.navigate("profile"))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/cyd30/Documents/HBuilderProjects/wechat_program-mianjing-front/pages/unified/unified.vue"]]);
wx.createPage(MiniProgramPage);
