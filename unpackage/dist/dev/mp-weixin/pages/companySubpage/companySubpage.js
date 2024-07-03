"use strict";
const common_vendor = require("../../common/vendor.js");
const components_sub = require("../../components/sub.js");
const card = () => "../../components/card.js";
const _sfc_main = {
  components: {
    card
  },
  data() {
    return {
      list: components_sub.companySubList,
      dropdowns: {
        location: false,
        position: false
      },
      filters: {
        location: null,
        position: null
      }
    };
  },
  computed: {
    filteredList() {
      return this.list.filter((item) => {
        return (this.filters.location === null || item.tag.includes(this.filters.location)) && (this.filters.position === null || item.subtitle.includes(this.filters.position));
      });
    }
  },
  methods: {
    toggleDropdown(type) {
      this.dropdowns[type] = !this.dropdowns[type];
      for (let key in this.dropdowns) {
        if (key !== type) {
          this.dropdowns[key] = false;
        }
      }
    },
    filterBy(type, value) {
      this.filters[type] = value === "all" ? null : value;
      this.dropdowns[type] = false;
    },
    openDetail(item) {
      const itemString = encodeURIComponent(JSON.stringify(item));
      common_vendor.index.navigateTo({
        url: `/pages/companyDetail/companyDetail?item=${itemString}`
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
    a: common_vendor.t(_ctx.title),
    b: common_vendor.p({
      type: $data.dropdowns.location ? "up" : "down"
    }),
    c: $data.dropdowns.location
  }, $data.dropdowns.location ? {
    d: common_vendor.o(($event) => $options.filterBy("location", "all")),
    e: $data.filters.location === "all" ? 1 : "",
    f: common_vendor.o(($event) => $options.filterBy("location", "internship")),
    g: $data.filters.location === "internship" ? 1 : "",
    h: common_vendor.o(($event) => $options.filterBy("location", "blank1")),
    i: $data.filters.location === "blank1" ? 1 : "",
    j: common_vendor.o(($event) => $options.filterBy("location", "blank2")),
    k: $data.filters.location === "blank2" ? 1 : ""
  } : {}, {
    l: common_vendor.o(($event) => $options.toggleDropdown("location")),
    m: common_vendor.p({
      type: $data.dropdowns.position ? "up" : "down"
    }),
    n: $data.dropdowns.position
  }, $data.dropdowns.position ? {
    o: common_vendor.o(($event) => $options.filterBy("position", "fulltime")),
    p: $data.filters.position === "fulltime" ? 1 : "",
    q: common_vendor.o(($event) => $options.filterBy("position", "internship")),
    r: $data.filters.position === "internship" ? 1 : ""
  } : {}, {
    s: common_vendor.o(($event) => $options.toggleDropdown("position")),
    t: common_vendor.f($options.filteredList, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.o(($event) => $options.openDetail(item), index),
        c: "6960e24e-2-" + i0,
        d: common_vendor.p({
          image: item.image,
          title: item.title,
          subtitle: item.subtitle,
          tag: item.tag,
          views: item.views
        })
      };
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/cyd30/Documents/HBuilderProjects/wechat_program-mianjing-front/pages/companySubpage/companySubpage.vue"]]);
wx.createPage(MiniProgramPage);
